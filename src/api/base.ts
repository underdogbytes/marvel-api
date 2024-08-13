export class API {
  static readonly apiBase: "https://gateway.marvel.com:443/v1/public";

  static async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.apiBase}${endpoint}`;
    
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      // TODO: remover ao subir o commit:
      console.log('resultado:', data);
      return data as T;
    } catch (error) {
      // TODO: remover ao subir o commit:
      console.log('deu merda:', error);
      throw error;
    }
  }
}