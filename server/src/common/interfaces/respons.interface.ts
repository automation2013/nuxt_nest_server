interface IResponseOk {
  status: 0;
  data: {
    [key: string]: unknown;
  };
}

interface IResponseError {
  status: -1;
  errcode: string;
  errmsg: string;
}

export type IResponse = IResponseOk | IResponseError;
