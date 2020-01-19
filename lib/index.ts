#!/usr/bin/env node

import path from 'path';
import program from 'commander';
import figlet from 'figlet';
import chalk from 'chalk';

import './commands/upcoming';

const pkg = require(path.join(__dirname, '../package.json'));

program
  .version(pkg.version)
  .description('Node.js CLI for Meetup')
  .usage('<cmd> [options]');

program.on('command:*', (commands?: string[]) => {
  if (commands) {
    console.error(`error: unknown command: ${commands[0]}`);

    process.exit(1);
  }
});

program.on('--help', () => {
  console.log(
    chalk.red(figlet.textSync('meetUPPER', { horizontalLayout: 'full' }))
  );
});

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.help();
}
