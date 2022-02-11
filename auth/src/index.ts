import express, { Application, Request, Response } from 'express';
import { connect } from './database/database';
import { PORT, HOST } from './configuration';

const app: Application = express();

app.get('/test', (_: Request, res: Response) => {
  res.send('Our auth server is working correctly');
});

app.get('/api/currentUser', (_: Request, res: Response) => {
  res.json({ id: '1234', email: 'foo@gmail.com' });
});

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`🚀 AUTH Server is running at http://localhost:${PORT}`);
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
