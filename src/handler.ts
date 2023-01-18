import WebSocket from "ws";
import { mouseMove } from './mouseMove.js';
import { drawCircle } from './circle.js';
import { drawSquare } from './square.js';
import { drawRectangle } from './rectangle.js';
import { screenshot } from './screenshot.js';

export const handlerFunc = async (data: WebSocket.RawData) => {
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
  if (string.startsWith('prnt_scrn')) {
    const result = await screenshot();
    if (result) return `prnt_scrn ${result}`;
  }
}
