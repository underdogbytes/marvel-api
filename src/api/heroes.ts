import { API } from "./base";

const URL_PATH = {
  ALL: (apikey: string) => `/characters?apikey=${apikey}`
};

class HeroesAPI extends API {
  static async getAll(apikey: string) {
    const endpoint = URL_PATH.ALL(apikey);
    const { data } = await this.request<{ data: any }>(endpoint);
    return data;
  }
}