import { apiClient } from "./apiClient";
import type { Candidate } from "../types/candidate";

export const getCandidates = async (): Promise<Candidate[]> => {
  const response = await apiClient.get<Candidate[]>("/candidates");
  return response.data;
};

// El id llega de la dirección (useParams), por eso se recibe como texto.
export const getCandidateById = async (id: string): Promise<Candidate> => {
  const response = await apiClient.get<Candidate>(`/candidates/${id}`);
  return response.data;
};
