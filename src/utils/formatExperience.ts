// Texto de los años de experiencia, con singular y caso especial para 0.
export const formatExperience = (years: number): string => {
  if (years === 0) return "Sin experiencia";
  if (years === 1) return "1 año de experiencia";
  return `${years} años de experiencia`;
};
