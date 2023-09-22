import { defineEventHandler, H3Event, EventHandlerRequest } from 'h3';
export default defineEventHandler((event: H3Event<EventHandlerRequest>) => {
  debugger;
  return {
    api: 'works1',
  };
});
