"use server";
import { fetchData } from "@/service/api.service";

export interface Props {
  name: string;
  lastName: string;
  email: string;
  birthdate: string;
  work: string;
  password: string;
}

export default async function registerUer(props: Props) {
  const responseRegister = await fetchData("/auth/register", {
    body: JSON.stringify(props),
    method: "POST",
  });

  return responseRegister;
}
