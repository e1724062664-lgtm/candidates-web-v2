// Describe cómo es un candidato. Es el mismo modelo que usa la API.
export interface Candidate {
  id: number;
  name: string;
  email: string;
  city: string;
  experienceYears: number;
  skills: string[];
}