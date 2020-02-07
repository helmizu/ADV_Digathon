import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'http://192.168.137.1:9004/api',
  headers: {
    'Authorization': 'Basic dGVsa29tZGlnaXRhbHNvbHV0aW9uZDN2OjY5NTg0OWRlLTlmYWEtNGJjMy05ZmIzLTA2NjAzNDQzNWM1OQ=='
  }
});

const get = async (path, params = {}) => {
  let queryString = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');
  if (queryString.length > 0) {
    queryString = `?${queryString}`;
  }
  const url = `${path}${queryString}`;
  const { data } = await instance.get(url);
  return data;
};

const post = async (path, body = {}) => {
  const { data } = await instance.post(path, body);
  return data;
};

const put = async (path, body = {}, params = {}) => {
  let queryString = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');
  if (queryString.length > 0) {
    queryString = `?${queryString}`;
  }
  const url = `${path}${queryString}`;
  const { data } = await instance.put(url, body);
  return data;
};

const remove = async (path, params) => {
  const { data } = await instance.delete(path, params);
  return data;
};

const ENDPOINT = {
  getCategory: async (params = {}) => await get('/document/category/v1', params),
  getCategoryDetail: async (id = '', params = {}) => await get(`/document/category/v1/${id}`, params),
  addCategory: async (payload = {}) => await post('/document/category/v1', payload),
  editCategory: async (id = '', payload = {}) => await put(`/document/category/v1/${id}`, payload),
  deleteCategory: async (id = '', params = {}) => await remove(`/document/category/v1/${id}`, params),
};

export default ENDPOINT;
