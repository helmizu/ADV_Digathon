import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'http://localhost:8080/api'
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

const ENDPOINT = {
  generateDraft: async (body = {}) => await post('/generateDraft', body),
  getProject: async (params = {}) => await get('/project', params),
  generateFinal: async (body = {}, params = {}) => await put('/generateFinal', body, params),
};

export default ENDPOINT;
