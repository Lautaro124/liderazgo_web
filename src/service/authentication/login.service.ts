"use server";
import { IUser } from "@/interface/user.interface";
import { post } from "@/service/api.service";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

interface LoginAction {
  email: string;
  password: string;
}

export async function loginAction(props: LoginAction): Promise<IUser | null> {
  try {
    const response = await post("/auth/login", props);
    const cookieHeader = (response as Response).headers.get("Set-Cookie");
    if (cookieHeader) {
      const token = cookieHeader.split(";")[0].split("=")[1];
      const cookieStore = await cookies();
      cookieStore.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: new Date(jwtDecode(token).exp! * 1000).getTime(),
      });
    }
    return await (response as Response).json();
  } catch (error) {
    return null;
  }
}
