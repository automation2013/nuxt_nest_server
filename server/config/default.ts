export default {
  server: {
    // 服务器配置
    httpsOpen: false, // 是否使用https协议
    port: 8080, // 服务器端口
    host: '0.0.0.0', // 服务器监听端口
    apiPrefix: 'api', // 服务器路由前缀
  },
  cookie: {
    // cookie配置 (https://www.expressjs.com.cn/4x/api.html#res.cookie)
    common: {
      // cookie 公共配置
      domain: '', // Domain name for the cookie. Defaults to the domain name of the app.
      path: '/', // Path for the cookie. Defaults to “/”.
      sameSite: 'strict',
      secure: true, // Marks the cookie to be used with HTTPS only.
      httpOnly: true, // Flags the cookie to be accessible only by the web server.
      maxAge: 3 * 60 * 1000, // Convenient option for setting the expiry time relative to the current time in milliseconds.
      signed: false,
    },
  },
  database: {
    // 数据库配置
    typeorm: {
      // mysql配置
      host: '10.1.113.4',
      port: 33306,
      username: 'dfroot',
      password: 'Q0k9Ka1858OW',
      database: 'atest',
      synchronize: false,
      entities: ['src/modules/**/**.entity.{ts,js}'],
      autoLoadEntities: true,
    },
    redis: {
      // redis配置
      host: '10.1.113.4',
      port: 46379,
      password: 'o0OE%3wGAFSR',
      prefix: 'dev-sso',
      dbNumber: 0,
    },
  },
  swagger: {
    // swagger 配置
    open: false, // 是否打开swagger
    path: 'swagger', // swagger访问路径
    title: '工程 swagger 文档',
    description: 'swagger 接口详情',
    version: '1.0',
    tag: '功能模块列表',
  },
};
