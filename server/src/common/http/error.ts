interface IError {
  errcode: string;
  errmsg: string;
}
// 业务错误码配置
export const ERRROR: { [key: string]: IError } = {
  DEMO: {
    // 测试错误
    errcode: '000000',
    errmsg: 'errmsg',
  },
};
