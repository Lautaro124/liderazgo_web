import { ICourse } from "@/interface/course.interface";
import { post } from "../api.service";

export async function createCourse(course: ICourse): Promise<ICourse | null> {
  try {
    const response = await post("/course/create", course);
    return await response.json();
  } catch (error) {
    throw new Error("Error al crear el curso");
  }
}
