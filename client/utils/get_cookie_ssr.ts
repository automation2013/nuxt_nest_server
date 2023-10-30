import { H3Event, parseCookies } from 'h3';
import { NuxtApp, NuxtSSRContext } from 'nuxt/app';

/**
 * 服务端渲染时可获取cookie，配合 useAsyncData 方法使用，该方法回调函数的第一个参数就是 NuxtApp 类型(https://nuxt.com/docs/api/composables/use-async-data)
 * @param nuxtApp
 */
export function getCookieSsr(nuxtApp: NuxtApp): undefined | string {
  const nuxtSSRContext: NuxtSSRContext = <NuxtSSRContext>nuxtApp.ssrContext;
  const event: H3Event = nuxtSSRContext.event;
  const cookieObj = parseCookies(event);
  const keys = Object.keys(cookieObj);
  if (!keys.length) {
    return undefined;
  }
  const list: any[] = [];
  keys.forEach((key) => {
    const str = `${key}=${cookieObj[key]}`;
    list.push(str);
  });
  const cookieStr = list.join(';');
  return cookieStr;
}
