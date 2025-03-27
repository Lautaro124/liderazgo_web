import { get } from "../api.service";
import { IUser } from "@/interface/user.interface";

export async function getAllUsers(): Promise<IUser[]> {
  try {
    const response = await get("/user/all");
    return await response.json();
  } catch (error) {
    throw new Error("Error al obtener los usuarios");
  }
};
