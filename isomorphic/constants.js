const HEARTBEAT_SESSION_NAME = 'JSESSIONID';
const ENV_DEVELOPMENT = 'development';
const ENV_PRODUCTION = 'production';
const SERVICE_WORKER_FILE = '/service-worker.js';
const API_PROXY_PATH = '/api';
const CLEAR_SERVICES_CACHE = '/clear-services-cache';
const HEALTH_CHECK = '/healthcheck';
const PROTOCOL_HTTPS = 'https';
const RESPONSE_OK = 200;
const RESPONSE_INTERNAL_SERVER_ERROR = 500;
const STATIC_FOLDER_PREFIX = '/static/';

module.exports = {
  HEARTBEAT_SESSION_NAME,
  ENV_DEVELOPMENT,
  ENV_PRODUCTION,
  SERVICE_WORKER_FILE,
  API_PROXY_PATH,
  CLEAR_SERVICES_CACHE,
  PROTOCOL_HTTPS,
  RESPONSE_OK,
  RESPONSE_INTERNAL_SERVER_ERROR,
  STATIC_FOLDER_PREFIX,
  HEALTH_CHECK,
};
