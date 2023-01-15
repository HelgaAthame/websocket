import { mouse, left, right, up, down } from "@nut-tree/nut-js";

export const mouseMove = (str: string) => {
  const where = str.slice(6).split(' ');
  switch (where[0]) {
    case 'up':
      (async () => {
        await mouse.move(up(Number(where[1])));
      })();
      break;
    case 'down':
      (async () => {
        await mouse.move(down(Number(where[1])));
      })();
      break;
    case 'left':
      (async () => {
        await mouse.move(left(Number(where[1])));
      })();
      break;
    case 'right':
      (async () => {
        await mouse.move(right(Number(where[1])));
      })();
      break;
  }
}
