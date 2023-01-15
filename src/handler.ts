import WebSocket from "ws";
import { mouseMove } from './mouseMove.js';

export const handlerFunc = (data: WebSocket.RawData) => {
  console.log(`we received ${data}`);
  const string = data.toString();
  if (string.startsWith('mouse')) {
    return mouseMove(string);
  }
  return 5;
}
