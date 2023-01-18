import { mouse, Region, screen } from "@nut-tree/nut-js";
import Jimp from 'jimp';

const size = 200;

export const screenshot = async () => {
  const { x, y } = await mouse.getPosition();

  //check for exceptions
  const h = await screen.height();
  const w = await screen.width();
  if (x + size > w
    || y + size > h) {
      console.log('\r\n!!! Screenshot goes off screen !!!\r\n');
      return;
    }

  const region = new Region(x, y, size, size);
  const image = await screen.grabRegion(region);
  const rgb = await image.toRGB();
  console.log(rgb);
  const jimpImage = new Jimp({
    data: rgb.data,
    width: rgb.width,
    height: rgb.height
  });
  const res = await jimpImage.getBufferAsync(Jimp.MIME_PNG);
  return res.toString('base64');
}
