// Forma de un candidato (igual a lo que devuelve la API).
export interface Candidate {
  id: number;
  name: string;
  email: string;
  city: string;
  experienceYears: number;
  skills: string[];
}
