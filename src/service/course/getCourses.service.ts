// filepath: c:\Users\colog\OneDrive\Escritorio\Programacion\liderazgo\liderazgo_web\src\service\course\getCourses.service.ts
"use server";
import { get } from "../api.service";
import { IInscriptionsResponse } from "@/interface/inscriptions.interface";

export async function getCourses(): Promise<IInscriptionsResponse[]> {
  try {
    const response = await get("/course/all");

    if (response.status !== 200) {
      throw new Error("Error al obtener los cursos");
    }

    return await response.json();
  } catch (error) {
    console.error("Error obteniendo cursos:", error);
    return [];
  }
}
