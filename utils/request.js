import axios from 'axios';
import cookies from 'utils/cookies';
import { HostAPI } from 'constants';

export const request = async ({
  host = '',
  url = '',
  method = 'get',
  params = {},
  data = {},
  headers = {},
  _token,
}) => {
  // console.log(`===> call to server: ${HostAPI}${url} -> method: ${method} -> data`, data);
  const token = _token || cookies.get('token');
  const grantType = 'Bearer';
  const result = await axios({
    url: `${host || HostAPI}${url}`,
    method,
    data,
    params,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
      Authorization: `${grantType} ${token}`,
    },
  });

  return result;
};

export const fakeRequest = ({ response }) => new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: response,
      });
    }, 1000);
  });
