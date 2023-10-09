import { Redis } from 'ioredis';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('config');

const redis = new Redis({
  host: config.get('database.redis.host'),
  port: config.get('database.redis.port'),
  password: config.get('database.redis.password'),
  db: config.get('database.redis.dbNumber'),
  keyPrefix: config.get('database.redis.prefix'),
});

redis.on('error', (err) => {
  console.log('\x1B[31m', `➜ redis 配置错误，错误信息如下`, '\x1B[0m');
  console.error(err);
});

/**
 * 设置redis值，过期时间单位为秒
 * @param option.key
 */
export async function redisSetEx(option: {
  key: string;
  value: string;
  seconds: number;
}): Promise<'OK'> {
  return await redis.setex(option.key, option.seconds, option.value);
}

/**
 * 查询redis的值
 * @param key redis的key
 */
export async function redisGet(key: string): Promise<string | null> {
  return await redis.get(key);
}

/**
 * 删除redis的值
 * @param key redis的key
 */
export async function redisDel(key: string): Promise<number> {
  return await redis.del(key);
}
