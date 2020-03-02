import express from 'express';
import htmlToImage from 'node-html-to-image';
import path from 'path';
import { v4 as generateUUID } from 'uuid';

import template from './template';

const app = express();

app.get('/generate', async (req, res) => {
  const {
    letters = '404',
    size = 150,
    fontSize = 60,
    background = 'white',
    color = 'black',
  } = req.query;

  const name = generateUUID();

  await htmlToImage({
    output: `./temp/${name}.png`,
    html: template,
    content: { letters, size, fontSize, background, color },
  });

  res.sendFile(path.resolve(__dirname, '..', 'temp', `${name}.png`));
});

app.listen(3333);
