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
