import { getStorage } from "@/utils/storage.utils";
import { get } from "../api.service";

export const getUserInfo = async () => {
  try {
    const token = getStorage("access_token");
    if (!token) {
      return null;
    }
    const respose = await get("/user/profile", {
      token: token,
    });
    return respose;
  } catch (error) {
    return null;
  }
};
