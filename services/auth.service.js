import request from 'utils/request';

const API_AUTH = '/api/authenticate';

/**
 * Service login
 * @param {*} Object includes field email and password
 * @returns Promise
 */
export const login = data => request({ url: API_AUTH, method: 'post', data });
