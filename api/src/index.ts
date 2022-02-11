/** https://cloudnweb.dev/2019/09/building-a-production-ready-node-js-app-with-typescript-and-docker/ */
// "exec": "ts-node ./src/index.ts"

import express, { Application, Request, Response } from 'express';
import axios from 'axios';

import { connect } from './database/database';
import { PORT, HOST, AUTH_API_URL } from './configuration';

interface User {
  id: string;
  email: string;
}

const app: Application = express();

app.get('/test', (_: Request, res: Response) => {
  res.send('Our api server is working correctly');
});

app.get('/testWithCurrentUser', (_: Request, res: Response) => {
  axios.get<User>(`${AUTH_API_URL}/currentUser`).then((response) => {
    res.json({
      testWithCurrentUser: true,
      user: response.data,
    });
  });
});

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`🚀 API Server is running at http://localhost:${PORT}`);
    console.log(`On host: ${HOST}`);
  });

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
