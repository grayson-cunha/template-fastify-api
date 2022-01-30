import dotenv from 'dotenv';

dotenv.config();

import App from './app';

async function startServer(): Promise<void> {
  const server = App.build();

  await server.listen(process.env.PORT as string);

  console.log('Server started successfully');
}

startServer();
