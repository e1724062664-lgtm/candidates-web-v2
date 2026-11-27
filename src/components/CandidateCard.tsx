import { Link } from "react-router";
import type { Candidate } from "../types/candidate";
import { formatExperience } from "../utils/formatExperience";
import './CandidateCard.css';

interface CandidateCardProps {
  candidate: Candidate;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export const CandidateCard = ({ candidate, isFavorite, onToggleFavorite }: CandidateCardProps) => {
  return (
    <article className="candidate-card">
      <h3 className="candidate-card-name">
        <Link to={`/candidates/${candidate.id}`} className="candidate-card-link">{candidate.name}</Link>
      </h3>
      <p className="candidate-card-detail">{candidate.city}</p>
      <p className="candidate-card-detail">{candidate.email}</p>
      <p className="candidate-card-detail">{formatExperience(candidate.experienceYears)}</p>
      {candidate.skills.length === 0 ? (
        <p className="candidate-card-detail">Sin habilidades registradas</p>
      ) : (
        <ul className="candidate-card-skills">
          {candidate.skills.map((skill) => (
            <li key={skill} className="candidate-card-skill">{skill}</li>
          ))}
        </ul>
      )}
      <button
        type="button"
        className="candidate-card-favorite"
        aria-pressed={isFavorite}
        onClick={() => onToggleFavorite(candidate.id)}
      >
        {isFavorite ? "En favoritos" : "Agregar a favoritos"}
      </button>
    </article>
  );
};
