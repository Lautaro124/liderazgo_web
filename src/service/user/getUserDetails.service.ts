import { get } from "../api.service";

export async function getUserDetails(id?: string) {
  if (!id) {
    return null;
  }
  const response = await get(`/user/details/${id}`);
  return await response.json();
}
