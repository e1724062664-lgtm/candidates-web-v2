import { useState } from 'react';
import { CandidateList } from '../components/CandidateList';
import { SearchBar } from '../components/SearchBar';
import { candidates } from '../data/candidates';
import './CandidatesPage.css';

// Quita las tildes y pasa a minúsculas, para que "maria" también encuentre a "María".
const normalizeText = (text: string): string => text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

export const CandidatesPage = () => {
  // El estado vive AQUÍ, en la página, y no dentro de las tarjetas:
  // al filtrar, React destruye las tarjetas que no coinciden y con ellas perderían lo que recordaban.
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  // Limpiar el texto: sin espacios sobrantes, en minúscula y sin tildes.
  const normalizedTerm = normalizeText(searchTerm.trim());

  // Quedan los candidatos cuyo nombre O ciudad contienen el texto buscado.
  const filteredCandidates = candidates.filter(
    (candidate) =>
      normalizeText(candidate.name).includes(normalizedTerm) || normalizeText(candidate.city).includes(normalizedTerm),
  );

  // Alterna un favorito: si el id ya está en la lista lo quita; si no, lo agrega.
  // Nunca se modifica el arreglo (no push ni splice): se crea uno NUEVO para que React detecte el cambio.
  const handleToggleFavorite = (id: number) => {
    if (favoriteIds.includes(id)) {
      setFavoriteIds(favoriteIds.filter((favoriteId) => favoriteId !== id));
    } else {
      setFavoriteIds([...favoriteIds, id]);
    }
  };

  return (
    <section className="candidates-page">
      <div className="candidates-page-header">
        <h2 className="candidates-page-title">Lista de candidatos</h2>
        <p className="candidates-page-count" aria-live="polite">
          {filteredCandidates.length} {filteredCandidates.length === 1 ? 'resultado' : 'resultados'}
        </p>
      </div>

      <div className="candidates-page-search">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Buscar por nombre o ciudad"
          label="Buscar candidatos"
        />
      </div>

      {filteredCandidates.length > 0 ? (
        <CandidateList
          candidates={filteredCandidates}
          favoriteIds={favoriteIds}
          onToggleFavorite={handleToggleFavorite}
        />
      ) : (
        <p className="candidates-page-empty">No se encontraron candidatos con ese término.</p>
      )}
    </section>
  );
};
