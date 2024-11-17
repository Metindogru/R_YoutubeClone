import axios from "axios";

const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    "x-rapidapi-key": "51a1f68f9fmsh758a3e716f3d48fp132e0ajsnde0777a54584",
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
});

export default api;
