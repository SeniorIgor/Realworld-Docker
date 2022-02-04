/** https://cloudnweb.dev/2019/09/building-a-production-ready-node-js-app-with-typescript-and-docker/ */
// "exec": "ts-node ./src/index.ts"

import express, { Application, Request, Response } from 'express';
import { connect } from './database/database';
import { PORT, HOST } from './configuration';
// import { UserModel } from './database/user/user.model';

const app: Application = express();

app.get('/test', (_: Request, res: Response) => {
  res.send('Our api server is working correctly');
});

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`🚀 API Server is running at http://localhost:${PORT}`);
    console.log(`On host: ${HOST}`);
  });

  console.log('hello !!!');

  // UserModel.find((err, users) => {
  //   if (err) {
  //     return console.log(err);
  //   }

  //   console.log(users);
  // });
};

connect()
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', startServer);
