export async function fetchData<T>(
  path: string,
  options?: RequestInit,
  token?: string
): Promise<T> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    throw new Error("API_URL is not defined");
  }
  const url = `${apiUrl}${path}`;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options?.headers,
    },
    ...options,
  });

  if (response.status !== 200) {
    throw new Error("Error en la petición");
  }

  const data = await response.json();
  return data;
}

export async function post<T>(
  path: string,
  body: unknown,
  options?: RequestInit,
  token?: string
) {
  return fetchData<T>(
    path,
    {
      method: "POST",
      body: JSON.stringify(body),
      cache: "no-cache",
      ...options,
    },
    token
  );
}

export async function put<T>(
  path: string,
  body: unknown,
  options?: RequestInit,
  token?: string
) {
  return fetchData<T>(
    path,
    {
      method: "PUT",
      body: JSON.stringify(body),
      cache: "no-cache",
      ...options,
    },
    token
  );
}

export async function get<T>(
  path: string,
  options?: RequestInit,
  token?: string
) {
  return fetchData<T>(path, options, token);
}
