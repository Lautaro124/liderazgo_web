import { IUser } from "@/interface/user.interface";
import { get } from "../api.service";

export async function getUserDetails(id?: string): Promise<IUser | undefined> {
  if (!id) {
    return;
  }
  const response = await get(`/user/details/${id}`);
  return await response.json();
}
