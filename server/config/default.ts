export default {
  server: {
    // 服务器配置
    port: 3000, // 服务器端口
    host: '0.0.0.0', // 服务器监听端口
    apiPrefix: 'api', // 服务器路由前缀
  },
  cookie: {
    // cookie配置
    common: {
      SameSite: 'Strict',
      Domain: '',
    },
  },
  database: {
    // 数据库配置
    typeorm: {
      // mysql配置
      host: '172.16.12.168',
      port: 32769,
      username: 'root',
      password: 'df123456',
      database: 'sso',
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
