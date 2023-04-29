import axios from '../node_modules/axios/dist/axios.min.js';

export function getNumberFact(number) {
  return axios.get(`http://numbersapi.com/${number}`);
}