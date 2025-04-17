// filepath: c:\Users\colog\OneDrive\Escritorio\Programacion\liderazgo\liderazgo_web\src\service\inscription\createInscription.service.ts
"use server";
import { post } from "../api.service";

interface CreateInscriptionDTO {
  userId: number;
  moduleId: number;
  courseId: number;
  isFree?: boolean;
}

export async function createInscription(inscriptionData: CreateInscriptionDTO) {
  try {
    const response = await post("/inscriptions/create", inscriptionData);

    if (response.status !== 200) {
      throw new Error("Error al inscribir al usuario");
    }

    return await response.json();
  } catch (error) {
    console.error("Error en la inscripción:", error);
    throw error;
  }
}
