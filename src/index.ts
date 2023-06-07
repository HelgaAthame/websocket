import { httpServer } from "./http_server/index.js";
import { createWebSocketStream, WebSocketServer } from 'ws';

import  { handlerFunc } from './handler.js';

const HTTP_PORT = 8181;

const wss = new WebSocketServer({
  port: 8080
});

wss.on('connection', ws => {
  console.log('new client connected');
  const wsStream = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false});
  wsStream.on('data', async data => {
    const result = await handlerFunc(data);
    if (result) {
      wsStream.write(result);
    }
  })
});

wss.on('close', () => {
  console.log('websocket is closed');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('websocket is closed');
  wss.close();
});

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
