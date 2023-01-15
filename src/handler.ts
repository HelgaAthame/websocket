import WebSocket from "ws";
import { mouseMove } from './mouseMove.js';
import { drawCircle } from './circle.js';

export const handlerFunc = (data: WebSocket.RawData) => {
  console.log(`we received ${data}`);
  const string = data.toString();
  if (string.startsWith('mouse')) {
    return mouseMove(string);
  }
  if (string.startsWith('draw_circle')) {
    drawCircle(Number(string.slice(11)));
  }
  return 5;
}
