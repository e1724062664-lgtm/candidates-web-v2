import type { Candidate } from '../types/candidate';
import { CandidateCard } from './CandidateCard';
import './CandidateList.css';

// La lista tampoco guarda estado: recibe todo desde la página y lo reparte a las tarjetas.
interface CandidateListProps {
  candidates: Candidate[];
  favoriteIds: number[];
  onToggleFavorite: (id: number) => void;
}

export const CandidateList = ({ candidates, favoriteIds, onToggleFavorite }: CandidateListProps) => {
  return (
    <div className="candidate-list">
      {/* La key es el id del candidato (nunca la posición): así React reconoce cada tarjeta al filtrar. */}
      {candidates.map((candidate) => (
        <CandidateCard
          key={candidate.id}
          candidate={candidate}
          isFavorite={favoriteIds.includes(candidate.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};
