"use server";
import { IAuthResponse } from "@/interface/auth.interface";
import { post } from "@/service/api.service";

export interface RegisterAction {
  fullName: string;
  email: string;
  birthdate: string;
  ocupation: string;
  password: string;
}

export async function registerUser(props: RegisterAction) {
  try {
    const response = await post<IAuthResponse>("/auth/register", props);

    return response;
  } catch (error) {
    return null;
  }
}
