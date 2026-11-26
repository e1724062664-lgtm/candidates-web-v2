import type { Candidate } from '../types/candidate';

// Datos locales de ejemplo (todavía no se llama a la API).
// Cubren todos los casos de la tarjeta: 0 años, 1 año, varios años y habilidades vacías.
export const candidates: Candidate[] = [
  { id: 1, name: 'Ana Torres', email: 'ana.torres@correo.com', city: 'Quito', experienceYears: 2, skills: ['TypeScript', 'SQL'] },
  { id: 2, name: 'Carlos Andrade', email: 'carlos.andrade@correo.com', city: 'Guayaquil', experienceYears: 5, skills: ['Java', 'Spring Boot', 'PostgreSQL'] },
  { id: 3, name: 'Camila Ortega', email: 'camila.ortega@gmail.com', city: 'Ibarra', experienceYears: 2, skills: ['React', 'TypeScript', 'CSS'] },
  { id: 4, name: 'Jorge Salazar', email: 'jorge.salazar@gmail.com', city: 'Riobamba', experienceYears: 6, skills: ['Java', 'Spring Boot', 'MySQL'] },
  { id: 5, name: 'Daniela Chávez', email: 'daniela.chavez@gmail.com', city: 'Machala', experienceYears: 1, skills: ['Figma', 'HTML', 'CSS'] },
  { id: 6, name: 'Esteban Cárdenas', email: 'esteban.cardenas@gmail.com', city: 'Portoviejo', experienceYears: 0, skills: ['JavaScript'] },
  { id: 7, name: 'Paola Játiva', email: 'paola.jativa@gmail.com', city: 'Latacunga', experienceYears: 8, skills: ['Python', 'Django', 'PostgreSQL', 'Docker'] },
  { id: 8, name: 'Kevin Rosero', email: 'kevin.rosero@gmail.com', city: 'Esmeraldas', experienceYears: 3, skills: [] },
];
