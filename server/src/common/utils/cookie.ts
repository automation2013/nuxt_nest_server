import { CookieOptions } from 'express';
/* eslint import/namespace: "off" */
import * as config from 'config';

/**
 * 查询cookie配置
 * @param key cookie
 */
export function getCookieConfig(key: string): CookieOptions {
  const commonConfig: CookieOptions = config.get('cookie.common') || {};
  const specificConfig: CookieOptions = config.has(`cookie.${key}`)
    ? config.get(`cookie.${key}`)
    : {};
  const specificKeys = Object.keys(specificConfig);
  const maxAge = specificKeys.includes('maxAge')
    ? specificConfig.maxAge
    : commonConfig.maxAge;
  const path = specificKeys.includes('path')
    ? specificConfig.path
    : commonConfig.path;
  const httpOnly = specificKeys.includes('httpOnly')
    ? specificConfig.httpOnly
    : commonConfig.httpOnly;
  const domain = specificKeys.includes('domain')
    ? specificConfig.domain
    : commonConfig.domain;
  const secure = specificKeys.includes('secure')
    ? specificConfig.secure
    : commonConfig.secure;
  const sameSite = specificKeys.includes('sameSite')
    ? specificConfig.sameSite
    : commonConfig.sameSite;
  const signed = specificKeys.includes('signed')
    ? specificConfig.signed
    : commonConfig.signed;
  const cookieConfig: CookieOptions = {
    maxAge,
    path,
    httpOnly,
    domain,
    secure,
    sameSite,
    signed,
  };
  specificConfig.maxAge === null && delete cookieConfig.maxAge;
  specificConfig.path === null && delete cookieConfig.path;
  specificConfig.httpOnly === null && delete cookieConfig.httpOnly;
  specificConfig.domain === null && delete cookieConfig.domain;
  specificConfig.secure === null && delete cookieConfig.secure;
  specificConfig.sameSite === null && delete cookieConfig.sameSite;
  specificConfig.signed === null && delete cookieConfig.signed;
  return cookieConfig;
}
