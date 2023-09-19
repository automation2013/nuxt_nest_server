export default {
  server: {
    // 服务器配置
    port: 3000, // 服务器端口
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
      host: '172.16.12.168',
      port: 32769,
      username: 'root',
      password: 'df123456',
      database: 'sso',
      synchronize: true,
      entities: ['src/modules/**/**.entity.{ts,js}'],
      autoLoadEntities: true,
    },
  },
};
