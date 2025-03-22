"use server";
import { IUser } from "@/interface/user.interface";
import { post } from "@/service/api.service";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export interface RegisterAction {
  fullName: string;
  email: string;
  birthdate: string;
  ocupation: string;
  password: string;
}

export async function registerUser(props: RegisterAction): Promise<IUser | null> {
  try {
    const response = await post("/auth/register", props);
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
