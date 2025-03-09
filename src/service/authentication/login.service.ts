"use server";
import { IAuthResponse } from "@/interface/auth.interface";
import { post } from "@/service/api.service";

interface LoginAction {
  email: string;
  password: string;
}

export async function loginAction(props: LoginAction) {
  try {
    const response = await post<IAuthResponse>("/auth/login", props);

    return response;
  } catch (error) {
    return null;
  }
}
