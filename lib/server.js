import log from './logger';
import { default as baseServer } from 'appium-express';
import { routeConfiguringFunction } from 'mobile-json-wire-protocol';
import AndroidUiautomator2Driver from './driver';

async function startServer (port, host) {
  let d = new AndroidUiautomator2Driver();
  let router = routeConfiguringFunction(d);
  let server = baseServer(router, port, host);
  log.info(`AndroidUiautomator2Driver server listening on http://${host}:${port}`);
  return server;
}

export { startServer };
