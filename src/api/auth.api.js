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
  // If this is not an object, defer to native stringification.
  if (typeof data !== 'object') {
    return ((data == null) ? '' : data.toString());
  }
  const buffer = [];
  // Serialize each key in the object.
  for (const name in data) {
    if (!data.hasOwnProperty(name)) {
      continue;
    }
    const value = data[name];
    buffer.push(
      `${encodeURIComponent(name)
      }=${
      encodeURIComponent((value == null) ? '' : value)}`,
    );
  }
  // Serialize the buffer and clean it up for transportation.
  const source = buffer
    .join('&')
    .replace(/%20/g, '+');
  return (source);
  /* eslint-disable */
};

/**
 * IoTMakers GW 로그인
 */
const getAccessToken = param => this.$axios.post(
  `${AUTH_API_PATH}/oauth/token`,
  serialize(param),
  {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      Authorization: `Basic ${encodeString(INIT_TOKEN)}`,
    },
  },
);

export default {
  getAccessToken,
};
