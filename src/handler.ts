import WebSocket from "ws";
import { mouseMove } from './mouseMove.js';
import { drawCircle } from './circle.js';
import { drawSquare } from './square.js';
import { drawRectangle } from './rectangle.js';

export const handlerFunc = (data: WebSocket.RawData) => {
  console.log(`we received ${data}`);
  const string = data.toString();
  if (string.startsWith('mouse')) {
    return mouseMove(string);
  }
  if (string.startsWith('draw_circle')) {
    drawCircle(Number(string.slice(11)));
  }
  if (string.startsWith('draw_square')) {
    drawSquare(Number(string.slice(11)));
  }
  if (string.startsWith('draw_rectangle')) {
    const arr = string.split(' ').map( el => Number(el) );
    drawRectangle(arr[1], arr[2]);
  }
  return 5;
}
