export async function fetchData<T>(
  path: string,
  options?: RequestInit,
  processData?: (data: unknown) => T
): Promise<T> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      throw new Error("API_URL is not defined");
    }
    const url = `${apiUrl}${path}`;
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    });
    const data = await response.json();
    return processData ? processData(data) : data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
