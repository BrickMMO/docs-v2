/* eslint-disable no-console */
const path = require('path');
const fse = require('fs-extra');

//Writes a CNAME file to the static file export directory.
async function run() {
  const static_exports_dest = path.join(__dirname, '../docs/CNAME');
  const cname_content = 'docs2.brickmmo.com';

  await fse.outputFile(static_exports_dest, cname_content);

  console.log('Wrote `CNAME` file to `' + static_exports_dest + '`');
}

run();