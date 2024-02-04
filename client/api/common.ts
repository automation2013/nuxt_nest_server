import { IHttpResponseClient } from 'common_content';
interface IRequest {
  readonly method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  readonly path: string;
  readonly data?: { [key: string]: any };
  readonly params?: { [key: string]: any };
  readonly cookie?: string | undefined;
}

/**
 * 发送http请求
 * @param params 请求配置
 */
export const request = async function (
  data: IRequest,
): Promise<IHttpResponseClient> {
  const { method, path: url, data: body, params, cookie } = data;
  try {
    const result: IHttpResponseClient = await $fetch(url, {
      method,
      body: method === 'GET' ? undefined : body,
      params,
      headers: {
        cookie: cookie as any, // 只有服务端转发请求才会生效，客户端无效(加 any 是为了消除警告)
      },
    });
    return result;
  } catch (err: any) {
    throw err.response;
  }
};
