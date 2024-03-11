import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos/";
const API_KEY = "pJZPexj5Oc8rEl9c_oiMZ0CUIY0vd_nP68GVOafNi6c";

export const fetchArticles = async (query, page) => {
  const response = await axios.get(API_URL, {
    params: { query, client_id: API_KEY, page, per_page: 12 },
  });
  console.log(response.data);
  return response.data;
};