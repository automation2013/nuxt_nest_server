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
    'session-cookie': {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7day
      secure: 'auto',
    },
  },
  session: {
    isOpen: true, // 是否启用session
    sessionName: 'connect.sid',
    sessionSecret: 'TMq2FBABaj',
    storePrefix: 'session-user:',
    sessionCookie: 'session-cookie', // session使用的cookie的名字
  },
  database: {
    // 数据库配置
    typeorm: {
      // mysql配置
      host: '192.168.10.2',
      port: 33308,
      username: 'dfroot',
      password: 'Q0k9Ka1859dataW',
      database: 'demo',
      entities: ['src/modules/**/**.entity.{ts,js}'],
      autoLoadEntities: true,
      supportBigNumbers: true,
      bigNumberStrings: true,
      synchronize: false,
    },
    redis: {
      // redis配置
      host: '192.168.10.2',
      port: 40381,
      password: 'k4RaskfM4',
      prefix: 'dev-nuxt-nest:',
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
