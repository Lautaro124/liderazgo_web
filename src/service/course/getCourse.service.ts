import { ICourse } from "@/interface/course.interface";
import { get } from "../api.service";

export async function getAllCourses(): Promise<ICourse[] | null> {
  try {
    const response = await get("/course/all");

    if (!response) {
      console.error("No se recibieron datos de la API");
      return null;
    }

    return await (response as Response).json();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al obtener los cursos:", {
        message: error.message,
        name: error.name,
      });
    } else {
      console.error("Error desconocido al obtener los cursos:", error);
    }
    return null;
  }
};
