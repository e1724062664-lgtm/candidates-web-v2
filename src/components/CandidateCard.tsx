import type { Candidate } from '../types/candidate';
import './CandidateCard.css';

// Las props que recibe la tarjeta. Ella NO guarda si es favorita: se lo dice la página.
interface CandidateCardProps {
  candidate: Candidate;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

// Redacta los años de experiencia correctamente: 0, 1 (singular) u otro valor (plural).
const formatExperience = (years: number): string => {
  if (years === 0) {
    return 'Sin experiencia';
  }

  if (years === 1) {
    return '1 año de experiencia';
  }

  return `${years} años de experiencia`;
};

export const CandidateCard = ({ candidate, isFavorite, onToggleFavorite }: CandidateCardProps) => {
  return (
    <article className="candidate-card">
      <h3 className="candidate-card-name">{candidate.name}</h3>
      <p className="candidate-card-city">{candidate.city}</p>
      <p className="candidate-card-email">{candidate.email}</p>
      <p className="candidate-card-experience">{formatExperience(candidate.experienceYears)}</p>

      {candidate.skills.length > 0 ? (
        <ul className="candidate-card-skills">
          {candidate.skills.map((skill) => (
            <li key={skill} className="candidate-card-skill">
              {skill}
            </li>
          ))}
        </ul>
      ) : (
        <p className="candidate-card-no-skills">Sin habilidades registradas</p>
      )}

      {/* La función se entrega dentro de una flecha: se ejecuta al hacer clic. */}
      <button
        type="button"
        className={isFavorite ? 'candidate-card-favorite candidate-card-favorite-active' : 'candidate-card-favorite'}
        aria-pressed={isFavorite}
        onClick={() => onToggleFavorite(candidate.id)}
      >
        {isFavorite ? 'En favoritos' : 'Agregar a favoritos'}
      </button>
    </article>
  );
};
