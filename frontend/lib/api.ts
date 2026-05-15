export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export async function apiGet<T>(path: string, retry = 1): Promise<T> {
  const url = `${API_URL}${path}`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as T;
  } catch (err) {
    if (retry > 0) return apiGet<T>(path, retry - 1);
    throw err;
  }
}
