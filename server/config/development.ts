export default {
  server: {
    // 服务器配置
    httpsOpen: true,
  },
  cookie: {
    common: {
      secure: true,
    },
  },
  database: {
    typeorm: {
      synchronize: true,
    },
  },
  swagger: {
    open: true,
  },
};
