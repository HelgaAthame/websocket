import { httpServer } from "./http_server/index.js";
import WebSocket, { WebSocketServer } from 'ws';

import { mouseMove } from './mouseMove';
import  { handlerFunc } from './handler.js';

const HTTP_PORT = 8181;

const wss = new WebSocketServer({
  port: 8080
});

wss.on('connection', ws => {
  console.log('new client connected');
  ws.on('message', async data => {
    console.log('received: %s', data);
    const result = await handlerFunc(data);
    console.log(result);
    if (result) {
      ws.send(result);
    }
  })
});

wss.on('close', () => {
  console.log('websocket is closed');
  //закрытие соединения
});

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
