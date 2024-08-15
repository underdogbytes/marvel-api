import md5 from "md5";

export const PUBLIC_KEY = '2a64a47cf2ec5330b16d6c740ed1384f';
export const PRIVATE_KEY = '7ec1ae77c99bb07529d699f8583e651e5633af81';
export const TIMESTAMP = Math.floor(Date.now() / 1000).toString();

let toBeHashed = TIMESTAMP + PRIVATE_KEY + PUBLIC_KEY;
export const HASH_MD5 = md5(toBeHashed);