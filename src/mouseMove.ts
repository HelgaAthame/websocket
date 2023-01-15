import { mouse, left, right, up, down } from "@nut-tree/nut-js";

export const mouseMove = async (str: string) => {
  const where = str.slice(6).split(' ');
  switch (where[0]) {
    case 'up':
        await mouse.move(up(Number(where[1])));
      break;
    case 'down':
        await mouse.move(down(Number(where[1])));
      break;
    case 'left':
        await mouse.move(left(Number(where[1])));
      break;
    case 'right':
        await mouse.move(right(Number(where[1])));
      break;
    case 'position':
        const { x, y } = await mouse.getPosition();
        return `mouse_position ${x}px,${y}x`;
      break;
  }
}
