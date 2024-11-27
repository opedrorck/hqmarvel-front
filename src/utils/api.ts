import axios from "axios";

export async function getComics(offset: number) {
  const publicKey = import.meta.env.VITE_API_KEY;
  const hash = import.meta.env.VITE_API_HASH;

  const params = {
    apikey: publicKey,
    ts: 1,
    hash: hash,
    offset: offset,
    limit: 20,
  };

  try {
    const response = await axios.get(
      "https://gateway.marvel.com/v1/public/comics",
      { params: { ...params } }
    );
    return response.data.data.results;
  } catch (err) {
    console.log(err);
  }
}
