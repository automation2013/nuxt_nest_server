interface IError {
  errcode: string; // 错误码
  errmsg: string; // 错误描述
}

interface BusinessError {
  [key: string]: IError;
}

// 业务错误码配置
export const HttpError: { [key: string]: BusinessError } = {
  // 业务模块
  Demo: {
    // 错误类型
    TestType: {
      // 测试错误
      errcode: '000000',
      errmsg: 'errmsg',
    },
  },
};
