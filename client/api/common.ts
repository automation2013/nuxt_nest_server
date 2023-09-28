// eslint-disable-next-line import/default
import qs from 'qs';
import { IHttpResponse } from 'common-content';
interface IRequest {
  readonly method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  readonly path: string;
  readonly data?: { [key: string]: any };
  readonly params?: { [key: string]: any };
}

/**
 * 发送http请求
 * @param params 请求配置
 */
export const request = async function (data: IRequest): Promise<IHttpResponse> {
  const { method, path, data: body, params } = data;
  const queryStr = params ? qs.stringify(params) : '';
  const url = queryStr ? `${path}?${queryStr}` : `${path}`;
  try {
    const result: IHttpResponse =
      method === 'GET'
        ? await $fetch(url)
        : await $fetch(url, {
            method,
            headers: {
              'Content-Type': 'application/json',
            },
            body,
          });
    return result;
  } catch (err: any) {
    throw err.response;
  }
};
