import { Button, mouse, Point, straightTo, screen } from "@nut-tree/nut-js";

export const drawRectangle = async ( a: number, b: number ) => {
  let { x, y } = await mouse.getPosition();

  //check for exceptions
  const h = await screen.height();
  const w = await screen.width();
  if (x + a > w
    || y + b > h) {
      console.log('\r\n!!! Rectangle goes off screen !!!\r\n');
      return '!!!_Rectangle_goes_off_screen_!!!';
    }

  mouse.config.mouseSpeed = 1000;
  await mouse.pressButton(Button.LEFT);
  for ( let i = 0; i < b; i++ ) {
    const point = new Point( x + i, y );
    await mouse.move(straightTo(point))
  }
  for ( let i = 0; i < a; i++ ) {
    const point = new Point( x + b, y + i );
    await mouse.move(straightTo(point))
  }
  for ( let i = 0; i < b; i++ ) {
    const point = new Point( x + b - i, y + a );
    await mouse.move(straightTo(point))
  }
  for ( let i = 0; i < a; i++ ) {
    const point = new Point( x, y + a - i );
    await mouse.move(straightTo(point))
  }
  await mouse.releaseButton(Button.LEFT);
}
