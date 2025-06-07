// 📁 src/js/pixabay-api.js
import axios from 'axios';

const API_KEY = '50728089-41b308bdec84da4d1a4e6886f';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15; // только 15 изображений на одну страницу

export async function getImagesByQuery(query, page = 1) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: PER_PAGE,
    },
  });

  return response.data;
}