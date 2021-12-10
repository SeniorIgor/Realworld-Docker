/** https://cloudnweb.dev/2019/09/building-a-production-ready-node-js-app-with-typescript-and-docker/ */

import express, { Application, Request, Response } from 'express';
import { connect } from './database/database';
import { PORT, HOST } from './configuration';
import { createDummyUsers } from './scripts/createDummyUsers';

const app: Application = express();

app.get('/test', (_: Request, res: Response) => {
  res.send('Our api server is working correctly');
});

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`🚀 API Server is running at http://localhost:${PORT}`);
    console.log(`On host: ${HOST}`);
  });

  createDummyUsers();
};

connect()
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', startServer);
