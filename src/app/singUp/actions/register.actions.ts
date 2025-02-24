"use server";
import { post } from "@/service/api.service";

export interface Props {
  fullName: string;
  email: string;
  birthdate: string;
  work: string;
  course: string;
  password: string;
}

export default async function registerUser(props: Props) {
  try {
    const response = await post<{
      access_token: string;
    }>("/auth/register", {
      body: JSON.stringify(props),
    });

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
