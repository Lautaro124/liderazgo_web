import { ICourse } from "@/interface/course.interface";
import { get } from "../api.service";
import { getStorage } from "@/utils/storage.utils";

export const getAllCourses = async () => {
  try {
    const token = getStorage("access_token");
    const response = await get<ICourse[]>("/course/all", {
      token: token,
    });
    return response;
  } catch (error) {
    return null;
  }
};
