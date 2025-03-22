"use server";
import { cookies } from "next/headers";

export async function fetchData(
  path: string,
  options?: RequestInit
): Promise<Response> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    throw new Error("API_URL is not defined");
  }
  const url = `${apiUrl}${path}`;
  const cookieStore = await cookies();

  try {
    const response = await fetch(url, {
      ...options,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieStore.toString(),
        ...options?.headers,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response;
  } catch (error) {
    console.error("Error en fetchData:", {
      error,
      url,
      method: options?.method || "GET",
    });
    throw error;
  }
}

export async function post(
  path: string,
  body: unknown,
) {
  const response = fetchData(path, {
    method: "POST",
    body: JSON.stringify(body),
  });

  return await response;
}

export async function put(
  path: string,
  body: unknown,
) {
  const response = fetchData(path, {
    method: "PUT",
    body: JSON.stringify(body),
  });
  return await response;
}

export async function get(path: string, options?: RequestInit) {
  const response = fetchData(path, {
    method: "GET",
    ...options,
  });
  return await response;
}
