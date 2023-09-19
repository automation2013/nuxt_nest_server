import { createClient } from 'redis';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('config');

const host = config.get('database.redis.host');
const port = config.get('database.redis.port');
const password = encodeURIComponent(config.get('database.redis.password'));
const dbNumber = config.get('database.redis.dbNumber');
const prefix = config.get('database.redis.prefix');

const client = createClient({
  url: `redis://:${password}@${host}:${port}`,
  database: dbNumber,
});

export async function createRedisClient() {
  client.on('error', (err) => {
    console.error('------Redis Client Error------');
    console.log(err);
    console.error('------Redis Client Error End------');
  });
  await client.connect();
}

/**
 * 设置redis值，过期时间单位为秒
 * @param option.key
 */
export async function redisSetEx(option: {
  key: string;
  value: string;
  seconds: number;
}) {
  const key = `${prefix}:${option.key}`;
  return await client.setEx(key, option.seconds, option.value);
}

/**
 * 查询redis的值
 * @param key redis的key
 */
export async function redisGet(key: string) {
  const redisKey = `${prefix}:${key}`;
  return await client.get(redisKey);
}

/**
 * 删除redis的值
 * @param key redis的key
 */
export async function redisDel(key: string) {
  const redisKey = `${prefix}:${key}`;
  return await client.del(redisKey);
}
