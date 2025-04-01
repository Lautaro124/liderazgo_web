import { IUser } from "@/interface/user.interface";
import { get } from "../api.service";

export async function searchUser(name?: string): Promise<IUser[]> {
  try {
    console.log("🚀 ~ searchUser ~ name:", name);
    const response = await get(`/user/search${name ? `?name=${name}` : ""}`);
    return await response.json();
  } catch (error) {
    throw new Error("Error al buscar usuarios" + error);
  }
}
