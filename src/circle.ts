import { Button, mouse, Point, straightTo } from "@nut-tree/nut-js";

export const drawCircle = async ( r: number ) => {
  let { x, y } = await mouse.getPosition();
  x -= r;
  mouse.config.mouseSpeed = 1000;
  await mouse.pressButton(Button.LEFT);
  for ( let i = 0; i < 360; i++ ) {
    const angle = ( i * Math.PI ) / 180;
    const curX = x + r * Math.cos(angle);
    const curY = y + r * Math.sin(angle);
    const point = new Point(curX, curY);
    await mouse.move(straightTo(point))
  }
  await mouse.releaseButton(Button.LEFT);
}
