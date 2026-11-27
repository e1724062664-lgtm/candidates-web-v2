import { useEffect, useState } from "react";
import "./CandidatesPage.css";
import { SearchBar } from "../components/SearchBar";
import { CandidateList } from "../components/CandidateList";
import type { Candidate } from "../types/candidate";
import { getCandidates } from "../services/candidateService";

// Quita tildes y mayúsculas para que "maria" encuentre "María".
const normalizeText = (text: string): string =>
  text.normalize("NFD").replace(/[̀-ͯ]/g, "").trim().toLowerCase();

export const CandidatesPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Pide los candidatos a la API una sola vez, cuando la página aparece.
  useEffect(() => {
    const loadCandidates = async () => {
      try {
        setCandidates(await getCandidates());
      } catch {
        setErrorMessage("No se pudieron cargar los candidatos. Intente de nuevo más tarde.");
      } finally {
        setIsLoading(false);
      }
    };
    loadCandidates();
  }, []);

  const normalizedTerm = normalizeText(searchTerm);

  const filteredCandidates = candidates.filter((candidate) =>
    normalizeText(`${candidate.name} ${candidate.city}`).includes(normalizedTerm),
  );

  const toggleFavorite = (id: number) => {
    setFavoriteIds((current) =>
      current.includes(id) ? current.filter((favoriteId) => favoriteId !== id) : [...current, id],
    );
  };

  // Decide qué mostrar debajo del buscador.
  const renderContent = () => {
    if (isLoading) {
      return <p className="candidates-page-status">Cargando candidatos...</p>;
    }
    if (errorMessage) {
      return (
        <p className="candidates-page-status candidates-page-error" role="alert">
          {errorMessage}
        </p>
      );
    }
    if (filteredCandidates.length === 0) {
      return <p className="candidates-page-status">No se encontraron candidatos con ese término.</p>;
    }
    return (
      <CandidateList
        candidates={filteredCandidates}
        favoriteIds={favoriteIds}
        onToggleFavorite={toggleFavorite}
      />
    );
  };

  return (
    <section>
      <div className="candidates-page-header">
        <h2 className="candidates-page-title">Candidatos</h2>
        {!isLoading && !errorMessage && (
          <p className="candidates-page-count" aria-live="polite">
            {filteredCandidates.length} {filteredCandidates.length === 1 ? "resultado" : "resultados"}
          </p>
        )}
      </div>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      {renderContent()}
    </section>
  );
};
