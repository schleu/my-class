import { Axios } from "./Axios";

interface iResponse {
  token: string;
  refresh: string;
}

export async function getLogin() {
  const res = await Axios.get(
    "https://mocki.io/v1/11393b54-e546-479d-b001-2c18fad4c410"
  );

  return res.data as iResponse;
}
