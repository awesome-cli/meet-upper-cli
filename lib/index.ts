#!/usr/bin/env node

import path from 'path';
import program from 'commander';
import figlet from 'figlet';
import chalk from 'chalk';

import './commands/upcoming';

const pkg = require(path.join(__dirname, '../package.json'));

program
  .version(pkg.version)
  .description(pkg.description)
  .usage('<cmd> [options]');

program.on('--help', () => {
  console.log(
    chalk.red(figlet.textSync('meetUPPER', { horizontalLayout: 'full' }))
  );
});

program.parse(process.argv);
