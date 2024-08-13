const apiBase = "https://gateway.marvel.com:443/v1/public";

export class API {

  static async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${apiBase}${endpoint}`;
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      return data as T;
    } catch (error) {
      throw error;
    }
  }
}