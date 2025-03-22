import { IModules } from "@/interface/module.interface";
import { get } from "../api.service";

export async function getModules(courseId: number): Promise<IModules[] | null> {
  const response = await get(`/module/${courseId}`);
  return await (response as Response).json();
}
