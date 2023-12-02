import axios from 'axios';

const BASE_URL = 'https://wallet.goit.ua/';
const $instance = axios.create({
  baseURL: BASE_URL,
});

export const setToken = token => {
  $instance.defaults.headers.Authorization = `Bearer ${token}`;
}
const clearToken = () => {
  $instance.defaults.headers.Authorization = '';
}



//Users Controller
export const currentUserRequest = async () => {
  const { data } = await $instance.get('/api/users/current');
  return data;
};

//Transactions Controller
export const createNewtransactionsRequest = async (formData) => {
  const { data } = await $instance.post('/api/transactions', formData);
  return data;
};
export const getAlltransactionsRequest = async (formData) => {
  const { data } = await $instance.get('/api/transactions', formData);
  return data;
};
export const updateTransactionsRequest = async (transactionId) => {
  const { data } = await $instance.patch(`/api/transactions/${transactionId}`);
  return data;
};
export const deleteTransactionsRequest = async (transactionId) => {
  const { data } = await $instance.delete(`/api/transactions/${transactionId}`);
  return data;
};

//Transaction Categories
export const transactionsByCategoryRequest = async (formData) => {
  const { data } = await $instance.get('/api/transaction-categories', formData);
  return data;
};

//Auth Controller
export const loginRequest = async (formData) => {
  const { data } = await $instance.post('/api/auth/sign-in', formData);
  setToken(data.token)
  return data;
};
export const registerRequest = async (formData) => {
  const { data } = await $instance.post('/api/auth/sign-up', formData);
  setToken(data.token)
  return data;
};
export const logOutRequest = async () => {
  const { data } = await $instance.delete('/api/auth/sign-out');
  clearToken(data.token)
  return data;
};

//Transaction Summary Controller
export const transactionsBySummaryPeriodRequest = async (formData) => {
  const { data } = await $instance.get('/api/transactions-summary', formData);
  return data;
};
















