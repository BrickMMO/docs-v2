/* eslint-disable no-console */
const path = require('path');
const fse = require('fs-extra');

//Writes an empty .noJekyll file to the static file export directory.
async function run() {
  //const notes_dest = path.join(__dirname, '../notes-v3.md');
  const static_exports_dest = path.join(__dirname, '../docs/.nojekyll');

  await fse.outputFile(static_exports_dest, '');

  console.log('Wrote `.nojekyll` file to `' + static_exports_dest + '`');
}

run();