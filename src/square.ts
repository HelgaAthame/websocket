import { Button, mouse, Point, straightTo } from "@nut-tree/nut-js";

export const drawSquare = async ( a: number ) => {
  let { x, y } = await mouse.getPosition();
  mouse.config.mouseSpeed = 1000;
  await mouse.pressButton(Button.LEFT);
  for ( let i = 0; i < a; i++ ) {
    const point = new Point( x + i, y );
    await mouse.move(straightTo(point))
  }
  for ( let i = 0; i < a; i++ ) {
    const point = new Point( x + a, y + i );
    await mouse.move(straightTo(point))
  }
  for ( let i = 0; i < a; i++ ) {
    const point = new Point( x + a - i, y + a );
    await mouse.move(straightTo(point))
  }
  for ( let i = 0; i < a; i++ ) {
    const point = new Point( x, y + a - i );
    await mouse.move(straightTo(point))
  }
  await mouse.releaseButton(Button.LEFT);
}
