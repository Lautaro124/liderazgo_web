import { get } from "../api.service";

export async function getUserInfo() {
  try {
    const respose = await get("/user/profile");
    return respose;
  } catch (error) {
    return null;
  }
};
