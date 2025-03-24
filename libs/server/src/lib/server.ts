import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routes/route.ts';
const app = express();

const appListen = (port: number | string) => {
  return app.listen(port, () => {
    console.log(`server is running in  `);
    console.log('http://localhost:' + port);
  });
};
const tryPort = (port: number | string) => {
  appListen(port).on('error', () => {
    tryPort(Number(port) + 1);
  });
};
export const server = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  let port = process.env['PORT'] || 8080;
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/posts', router);
  app.use('/menu', router);
  app.use('/products', router);
  app.use('/shoppingCart', router);

  tryPort(port);
};
server();
