import md5 from "md5";
import { useState } from "react";
import { API } from "./base";

const KEY = {
  ALL: (timestamp: any, apikey: string, hash: string, offset: number) => `/characters?offset=${offset}&limit=10&ts=${timestamp}&apikey=${apikey}&hash=${hash}`
};

interface Hero {
  comics: any[];
  description: string;
  events: {
    items: { name: string }[];
  };
  id: number;
  name: string;
  series: {
    items: { name: string }[];
  },
  stories: any[];
  thumbnail: {
    extension: string,
    path: string
  };
}

interface HeroesData {
  count: number,
  limit: number,
  offset: number,
  results: Hero[];
  total: number
}

class HeroesAPI extends API {
  static async getAll(timestamp: any, apikey: string, hash: string, offset: number) {
    const endpoint = KEY.ALL(timestamp, apikey, hash, offset);
    const { data } = await this.request<{ data: any }>(endpoint);
    return data;
  }
}

export function useHeroesGetAll() {
  const [heroes, setHeroes] = useState<HeroesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  async function fetchHeroes(offset: number) {
    setLoading(true);
    setError(null);
    try {
      let timestamp = Math.floor(Date.now() / 1000).toString();
      let privateKey = '7ec1ae77c99bb07529d699f8583e651e5633af81';
      let publicKey = '2a64a47cf2ec5330b16d6c740ed1384f';

      let toBeHashed = timestamp + privateKey + publicKey;
      let md55 = md5(toBeHashed);

      const data = await HeroesAPI.getAll(timestamp, publicKey, md55, offset);
      setHeroes(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }

  return { heroes, loading, error, fetchHeroes };
}