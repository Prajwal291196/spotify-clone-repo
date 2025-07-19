import axios from "axios"; //import axios class from axios module
import { SearchSpotify } from "../JSONFiles/SearchSpotify";

const BASE_URL = 'https://spotify23.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {
    q: '<REQUIRED>',
    type: 'multi',
    offset: '0',
    limit: '10',
    numberOfTopResults: '5'
  },
  headers: {
    'X-RapidAPI-Key': 'd6b87ef198msh2f2d4a1b224ea0cp1ef0fbjsnfe0a28b4f61d',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async (url) => {
  //const {data} = await axios.get(`${BASE_URL}/${url}`, options)
  const { data } = { SearchSpotify };
  return data;

}