import axios from 'axios';
import { notification } from 'antd';
import { omitBy, merge } from 'lodash';
import { getLocalSettings } from '~/i18n';
import { clear as clearSession, getToken } from './session';
const codeMessage = {
  200: '服务器成功返回请求的数据',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时'
};

const config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
  'X-Requested-With': 'XMLHttpRequest', // xhr
  'Cache-Control': 'no-cache'
};

function formatUrl(path, isRoot) {
  const reqPath = `${isRoot ? '/auth' : ''}${path}`;
  const url = `${__API_HOST__}${__API_PORT__ ? `:${__API_PORT__}` : ''}${reqPath}`;
  return __API_HTTPS__ === 'true' ? `https://${url}` : `http://${url}`;
}

export default class Service {
  constructor() {
    const _axios = axios.create(config);
    // 拦截请求
    _axios.interceptors.request.use(
      config => {
        let conf = { ...config, deviceType: 'WEB' };
        const token = getToken();
        if (token && !conf.headers.token) {
          // header 中加入 token
          conf = merge(conf, { headers: { token, 'Accept-Language': getLocalSettings() } });
        }
        return conf;
      },
      error => Promise.reject(error)
    );
    // 拦截返回
    _axios.interceptors.response.use(
      // response => response.data.data,
      response => {
        const { code, message } = response.data;
        const successCode = [200];
        if (!successCode.includes(code)) {
          throw new Error(message);
        }
        return response.data.data; 
      },
      error => {
        let err = {};
        if (error.response) {
          const { config: cfg = {} } = error.response;
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          const e = typeof error.response.data === 'string'
            ? { error_message: error.response.data }
            : error.response.data;
          err = {
            ...e,
            status: error.response.status,
            url: cfg.url || ''
          };
        } else {
          // Something happened in setting up the request that triggered an Error
          err = error;
        }
        const errortext = err.error_message || err.message || codeMessage[err.status];
        // log to console
        console.error(err);
        const errStatus = [401, 408];
        if (errStatus.includes(err.status)) {
          // 授权失败， 登录失效或未登录
          // 清除用户与token信息
          clearSession();
          return;
        }
        const e = new Error(errortext);
        e.status = err.status;
        e.response = error.response;
        throw e;
      }
    );
    this.$http = _axios;
  }

  request(url, method, {
    params, data, headers = {}, isRoot = false, ...others
  } = {}) {
    if (!url) return;
    const conf = {
      ...others,
      url: formatUrl(url, isRoot),
      method,
      headers,
      // disable browser's cache
      // always make a new request
      params: {
        ...params,
        timestamp: new Date().getTime()
      },
      data
    };
    conf.headers = omitBy(conf.headers, v => typeof v === 'undefined');
    return this.$http.request(conf);
  }

  get(url, params, config = {}) {
    return this.request(url, 'GET', { ...config, params });
  }

  post(url, data, config = {}) {
    return this.request(url, 'POST', { ...config, data });
  }

  put(url, data, config = {}) {
    return this.request(url, 'PUT', { ...config, data });
  }

  delete(url, data, config = {}) {
    return this.request(url, 'DELETE', { ...config, data });
  }
}
