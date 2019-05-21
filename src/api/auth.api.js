import { AUTH_API_PATH, INIT_TOKEN } from '../constants';

/**
 * base64 encode method
 * @param {*} str
 */
const encodeString = str => window.btoa(str);

/**
 * Form Data 생성
 * @param {*} fd
 */
const serialize = (data) => {
  /* eslint-disable */
  if (typeof data !== 'object') {
    return ((data == null) ? '' : data.toString());
  }
  const buffer = [];
  for (const name in data) {
    if (!data.hasOwnProperty(name)) {
      continue;
    }
    const value = data[name];
    buffer.push(
      `${encodeURIComponent(name)}=${encodeURIComponent((value == null) ? '' : value)}`,
    );
  }
  const source = buffer.join('&').replace(/%20/g, '+');
  return (source);
  /* eslint-disable */
};

/**
 * IoTMakers GW 로그인
 */
const getAccessToken = async (param) => {
  try {
    let res = await $axios.post(`${AUTH_API_PATH}/oauth/token`,
      serialize(param),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          Authorization: `Basic ${encodeString(INIT_TOKEN)}`,
        },
      });
    return res;
  } catch (error) {
    return error;
  }
}

export {
  getAccessToken
};
