import axios from 'axios';

const HOSTNAME = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '';

export const encryptVigenere = (text, keyword) => {
  return axios.post(`${HOSTNAME}/api/vigenere/encrypt`, { text, keyword });
};

export const decryptVigenere = (text, keyword) => {
  return axios.post(`${HOSTNAME}/api/vigenere/decrypt`, { text, keyword });
};

export const encryptCaesar = (text, padding) => {
  return axios.post(`${HOSTNAME}/api/caesar/encrypt`, { text, padding });
};

export const decryptCaesar = (text, padding) => {
  return axios.post(`${HOSTNAME}/api/caesar/decrypt`, { text, padding });
};

export const encryptHill = (text, matrix) => {
  return axios.post(`${HOSTNAME}/api/hill/encrypt`, { text, matrix });
};

export const decryptHill = (text, matrix) => {
  return axios.post(`${HOSTNAME}/api/hill/decrypt`, { text, matrix });
};

export const encryptAffine = (text, key) => {
  return axios.post(`${HOSTNAME}/api/affine/encrypt`, { text, ...key });
};

export const decryptAffine = (text, key) => {
  return axios.post(`${HOSTNAME}/api/affine/decrypt`, { text, ...key });
};