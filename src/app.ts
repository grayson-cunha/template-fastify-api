import path from 'path';

import { fastify, FastifyInstance } from 'fastify';
import autoLoad from 'fastify-autoload';

export default function buildApp(): FastifyInstance {
  const app = fastify({});
  const apiPath = path.join(__dirname, 'services');

  app.register(autoLoad, {
    dir: apiPath,
    dirNameRoutePrefix: false,
    maxDepth: 1,
  });

  return app;
}
