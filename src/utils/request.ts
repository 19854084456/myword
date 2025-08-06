import axios from "axios";
import { message } from './message';
const request = axios.create({
  baseURL: 'http://106.53.77.170:3000', // 根据实际情况修改基础URL
  timeout: 300000, 
  headers: {
    "Content-Type": "application/json"
  }
});
export const requests = {
  get: (url: string, params?: any) => {
    return request({
      url,
      method: "GET",
      params,
    });
  },
  post: (url: string, data?: any) => {
    return request({
      url,
      method: "POST",
      data,
    });
  },
};

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token');
    const notNeedLogin = ['/webSee/login','/assessment/createAssessment','/resume/ask'];
    if (config.url && !notNeedLogin.includes(config.url)) {
      // 在这里对请求进行处理
      // 从本地存储中获取token
      // if (!token) {
      //   message.error('请先登录');
      //   return Promise.reject('请先登录');
      // }
    }
     // 将token添加到请求头中
     config.headers.token = token||'notoken';
    return config;
  },
  (error) => {
    // 对请求错误进行处理
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    // 在这里对返回值进行处理
    if (response.data.code === 200) {
      return processData(response.data);
    }
    if (response.data.code !== 200) {
      message.error(response.data.message);
    }
  },
  (error) => {
    // 对响应错误进行处理
    return Promise.reject(error);
  }
);

function processData(data: any): any {
  // 在这里进行数据处理
  return data; // 返回处理后的数据
}

export default request;