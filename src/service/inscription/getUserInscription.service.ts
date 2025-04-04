import { IInscription } from "@/interface/inscriptions.interface";
import { get } from "../api.service";

export async function getUserInscription(id?: string): Promise<IInscription[]> {
  const response = await get(`/inscriptions/user/${id}`);

  if (response.status !== 200) {
    throw new Error("Error fetching user inscriptions");
  }
  return await response.json();
}