"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _nodehtmltoimage = require('node-html-to-image'); var _nodehtmltoimage2 = _interopRequireDefault(_nodehtmltoimage);

(async () => {
  await _nodehtmltoimage2.default.call(void 0, {
    output: './temp/image.png',
    html: `<html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;

                  display: flex;
                  align-items: center;
                  justify-content: center;

                  font-size: 60px;
                  width: 150px;
                  height: 150px;
                }
              <style>
              </style>
            </head>
            <body>{{letters}}</body>
          </html>
    `,
    content: { letters: 'JS' },
  });
})();
