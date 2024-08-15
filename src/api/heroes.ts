import { useState } from "react";
import { HASH_MD5, PUBLIC_KEY, TIMESTAMP } from "../constants";
import { API } from "./base";

const KEY = {
  ALL: (timestamp: any, apikey: string, hash: string, offset: number, name?: string) => `/characters?offset=${offset}&limit=10&ts=${timestamp}&apikey=${apikey}&hash=${hash}${name ? `&name=${name}` : ''}`,
  ONE: (timestamp: any, apikey: string, hash: string, id: number) => `/characters/${id}?&ts=${timestamp}&apikey=${apikey}&hash=${hash}`,
  COMICS: (timestamp: any, apikey: string, hash: string, id: number) => `/characters/${id}/comics?&ts=${timestamp}&apikey=${apikey}&hash=${hash}`
};

interface Hero {
  comics: {
    available?: number,
    items: { name: string }[];
  };
  description: string;
  events: {
    available?: number,
    items: { name: string }[];
  };
  id: number;
  name: string;
  series: {
    available?: number,
    items: { name: string }[];
  },
  stories: {
    available?: number,
    items: { name: string }[];
  };
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

interface Comic {
  id: number,
  digitalId?: number,
  title?: string,
  thumbnail: {
    extension: string,
    path: string
  };
  images: {
    extension: string,
    path: string
  };
  creators: []
}

class HeroesAPI extends API {
  static async getAll(timestamp: any, apikey: string, hash: string, offset: number, name?: string) {
    const endpoint = KEY.ALL(timestamp, apikey, hash, offset, name);
    const { data } = await this.request<{ data: any }>(endpoint);
    return data;
  }

  static async getHero(timestamp: any, apikey: string, hash: string, id: number): Promise<Hero> {
    const endpoint = KEY.ONE(timestamp, apikey, hash, id);
    const { data } = await this.request<{ data: any }>(endpoint);
    return data?.results[0];
  }

  static async getComics(timestamp: any, apikey: string, hash: string, id: number): Promise<Comic> {
    const endpoint = KEY.COMICS(timestamp, apikey, hash, id);
    const { data } = await this.request<{ data: any }>(endpoint);
    return data?.results;
  }
}

export function useHeroesGetAll() {
  const [heroes, setHeroes] = useState<HeroesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  async function fetchHeroes(offset: number, name?: string) {
    setLoading(true);
    setError(null);
    try {
      const data = await HeroesAPI.getAll(TIMESTAMP, PUBLIC_KEY, HASH_MD5, offset, name);
      setHeroes(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }

  return { heroes, loading, error, fetchHeroes };
}

export function useGetHero(id: number) {
  const [hero, setHero] = useState<Hero | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  async function fetchHero(id:number) {
    setLoading(true);
    setError(null);
    try {
      const data = await HeroesAPI.getHero(TIMESTAMP, PUBLIC_KEY, HASH_MD5, id);
      setHero(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }

  return { hero, loading, error, fetchHero };
}

export function useGetComics(id: number) {
  const [comics, setComic] = useState<Comic | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  async function fetchComics(id: number) {
    setLoading(true);
    setError(null);
    try {
      const data = await HeroesAPI.getComics(TIMESTAMP, PUBLIC_KEY, HASH_MD5, id);
      setComic(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }

  return { comics, loading, error, fetchComics };
}