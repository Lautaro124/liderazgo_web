"use server";
import { post } from "@/service/api.service";

export interface Props {
  fullName: string;
  email: string;
  birthdate: string;
  ocupation: string;
  password: string;
}

export default async function registerUser(props: Props) {
  try {
    const response = await post("/auth/register", props);

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
