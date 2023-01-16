import { mouse, Region, screen } from "@nut-tree/nut-js";
import Jimp from 'jimp';

const size = 200;

export const screenshot = async () => {
  const { x, y } = await mouse.getPosition();
  const region = new Region(x, y, size, size);
  const image = await screen.grabRegion(region);
  const jimpImage = new Jimp({
    data: image.data,
    width: image.width,
    height: image.height
  });
  const res = await jimpImage.getBufferAsync(Jimp.MIME_PNG);
  return res.toString('base64');
}
