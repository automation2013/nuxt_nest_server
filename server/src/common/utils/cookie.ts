import { CookieOptions } from 'express';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('config');

/**
 * 查询cookie配置
 * @param key cookie
 */
export function getCookieConfig(key: string): CookieOptions {
  const commonConfig: CookieOptions = config.get('cookie.common') || {};
  const specificConfig: CookieOptions = config.has(`cookie.${key}`)
    ? config.get('cookie.common')
    : {};
  const cookieConfig: CookieOptions = {
    maxAge: specificConfig.maxAge || commonConfig.maxAge,
    path: specificConfig.path || commonConfig.path,
    httpOnly: specificConfig.httpOnly || commonConfig.httpOnly,
    domain: specificConfig.domain || commonConfig.domain,
    secure: specificConfig.secure || commonConfig.secure,
    sameSite: specificConfig.sameSite || commonConfig.sameSite,
    signed: specificConfig.signed || commonConfig.signed,
  };
  return cookieConfig;
}
