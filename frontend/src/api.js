import axios from 'axios';

const HOSTNAME = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '';

export const encryptVigenere = (text, keyword) => {
  return axios.post(`${HOSTNAME}/api/vigenere/encrypt`, { text, keyword });
};

export const encryptCaesar = (text, padding) => {
  return axios.post(`${HOSTNAME}/api/caesar/encrypt`, { text, padding });
};

export const encryptHill = (text, matrix) => {
  return axios.post(`${HOSTNAME}/api/hill/encrypt`, { text, matrix });
};

export const encryptAffine = (text, key) => {
  return axios.post(`${HOSTNAME}/api/affine/encrypt`, { text, ...key });
};