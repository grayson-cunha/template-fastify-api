import path from 'path';

import { fastify, FastifyInstance } from 'fastify';
import autoLoad from 'fastify-autoload';

import connectDbPlugin from './plugins/db-connector';

class App {
  constructor() {}

  build(): FastifyInstance {
    const app = fastify({});
    const apiPath = path.join(__dirname, 'services');

    // register plugin below:
    app.register(connectDbPlugin);

    app.register(autoLoad, {
      dir: apiPath,
      dirNameRoutePrefix: false,
      maxDepth: 1,
    });

    return app;
  }
}

export default new App();
