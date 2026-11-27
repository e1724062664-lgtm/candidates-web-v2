import { useEffect, useState } from "react";
import { isAxiosError } from "axios";
import { Link, useParams } from "react-router";
import "./CandidateDetailPage.css";
import type { Candidate } from "../types/candidate";
import { getCandidateById } from "../services/candidateService";
import { formatExperience } from "../utils/formatExperience";

const NOT_FOUND_MESSAGE = "El candidato que busca no existe.";
const GENERAL_ERROR_MESSAGE = "No se pudieron cargar los candidatos. Intente de nuevo más tarde.";

export const CandidateDetailPage = () => {
  // El id de la dirección es siempre texto; se envía así a la API.
  const { id } = useParams();
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const loadCandidate = async () => {
      setIsLoading(true);
      setErrorMessage("");
      try {
        setCandidate(await getCandidateById(id ?? ""));
      } catch (error) {
        // 404 (no existe) y 400 (id no válido) significan "no existe"; lo demás es un fallo general.
        const status = isAxiosError(error) ? error.response?.status : undefined;
        setErrorMessage(status === 404 || status === 400 ? NOT_FOUND_MESSAGE : GENERAL_ERROR_MESSAGE);
      } finally {
        setIsLoading(false);
      }
    };
    loadCandidate();
  }, [id]);

  const renderContent = () => {
    if (isLoading) {
      return <p className="candidate-detail-status">Cargando candidato...</p>;
    }
    if (errorMessage || !candidate) {
      return (
        <p className="candidate-detail-status candidate-detail-error" role="alert">
          {errorMessage || NOT_FOUND_MESSAGE}
        </p>
      );
    }
    return (
      <article className="candidate-detail-card">
        <h2 className="candidate-detail-name">{candidate.name}</h2>
        <p className="candidate-detail-row">{candidate.city}</p>
        <p className="candidate-detail-row">{candidate.email}</p>
        <p className="candidate-detail-row">{formatExperience(candidate.experienceYears)}</p>
        {candidate.skills.length === 0 ? (
          <p className="candidate-detail-row">Sin habilidades registradas</p>
        ) : (
          <ul className="candidate-detail-skills">
            {candidate.skills.map((skill) => (
              <li key={skill} className="candidate-detail-skill">{skill}</li>
            ))}
          </ul>
        )}
      </article>
    );
  };

  return (
    <section className="candidate-detail">
      <Link to="/candidates" className="candidate-detail-back">← Volver a los candidatos</Link>
      {renderContent()}
    </section>
  );
};
