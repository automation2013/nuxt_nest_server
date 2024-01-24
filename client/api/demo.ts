import { request } from './common';

interface IDemoGetTest {
  nameGet: string; // 字段描述
}

interface IDemoPostTest {
  namePost: string; // 字段描述
}
/**
 * 测试get请求
 */
export function demoGetTest(params: IDemoGetTest) {
  return request({
    path: '/api/demo/test/get',
    method: 'GET',
    params,
  });
}

/**
 * 测试post请求
 */
export function demoPostTest(data: IDemoPostTest) {
  return request({
    path: '/api/demo/test/post',
    method: 'POST',
    data,
  });
}
