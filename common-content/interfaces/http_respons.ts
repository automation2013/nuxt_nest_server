interface IHttpHtResponseOk {
  status: 0;
  data: {
    [key: string]: unknown;
  };
}

interface IHttpResponseError {
  status: -1;
  errcode: string;
  errmsg: string;
}

export type IHttpResponse = IHttpHtResponseOk | IHttpResponseError;

export interface IHttpResponseClient {
  status: number;
  data: {
    [key: string]: unknown;
  };
  errcode: string;
  errmsg: string;
}
