# HTML Image

A simple Image generator using html in your body

## Clone and Run

After clone this repository locally you need execute

`yarn` to download all dependecies
`yarn start` to execute a express server listen the port 3333.

In your browser you can access the routes `localhost:3333/generate` an you can pass the query params:

- `letters`: the text to render in HTML body, default is 404;
- `size`: the image height and width, default is 150;
- `fontSize`: size in px of the letters, default is 60;
- `background`: background of the file, default is white;
- `color`: letters colors, default is black;

## Next steps

You can edit the HTML template file

After this you can change the `content` param in `src/index.js` line 24 to manipulate the template.
