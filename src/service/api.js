import axios from 'axios';
console.log(10 + 10)
const BASE_URL = 'https://wallet.goit.ua/docs/';
const $instance = axios.create({
  baseURL: BASE_URL,
});



export const fetchUser = async () => {
  const { data } = await $instance.get('/api/transactions');
  console.log(data)
  return data;
};

