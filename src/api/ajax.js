/*
能发送异步ajax请求的函数模块
封装axios库
函数的返回值是promise对象
1. 优化1: 统一处理请求异常?
    在外层包一个自己创建的promise对象
    在请求出错时, 不reject(error), 而是显示错误提示
2. 优化2: 异步得到不是reponse, 而是response.data
   在请求成功resolve时: resolve(response.data)
 */

import axios from 'axios'
import {message} from 'antd'

export default function ajax(url, data={}, type='GET',config={}) {


  data = JSON.stringify(data);
  let headers = {
    "Access-Control-Allow-Origin":"*",
    // 'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
    "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
    "X-Powered-By":' 3.2.1',
    "Content-Type": "application/json;charset=utf-8"
    // 'Authorization': `Bearer ${apiToken}`,
  };

  if (config.headers) {
    headers = {
      ...headers,
      ...config.headers
    }
  }

  return new Promise((resolve, reject) => {
    let promise

    if(type==='GET') { // 发GET请求
      promise = axios.get(url, { 
        params: data 
      })
    } else { 
      promise = axios.post(url, data,{
        headers: headers});
    }
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      message.error('请求出错了: ' + error.message)
    })
  })


}

// 请求登陆接口
// ajax('/login', {username: 'Tom', passsword: '12345'}, 'POST').then()
// 添加用户
// ajax('/manage/user/add', {username: 'Tom', passsword: '12345', phone: '13712341234'}, 'POST').then()
