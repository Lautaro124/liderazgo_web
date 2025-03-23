import { IClass } from "@/interface/class.inteface";
import { get } from "../api.service";

export async function getClass(moduleId: number, classId: number): Promise<IClass> {
  const response = await get(`/class/${moduleId}/${classId}`);
  return response.json();
}