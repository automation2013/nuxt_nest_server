import {
  defineEventHandler,
  H3Event,
  EventHandlerRequest,
  proxyRequest,
} from 'h3';
import { APP_SERVER_HOST } from '../../common/constants/server';
export default defineEventHandler(
  async (event: H3Event<EventHandlerRequest>) => {
    const path = event.path;
    const url = `${APP_SERVER_HOST}${path}`;
    return proxyRequest(event, url);
  },
);
