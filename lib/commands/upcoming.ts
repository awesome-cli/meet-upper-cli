import program from 'commander';
import fetch from 'node-fetch';
import chalk from 'chalk';
import twoDigit from 'two-digit';

import { spinner } from '../functions/spinner';

program
  .command('UPCOMING <group>')
  .description('display upcoming events for a group')
  .action(async (group: string) => {
    spinner.text = 'Looking for upcoming events';
    spinner.color = 'red';
    spinner.start();

    try {
      const res = await fetch(`https://api.meetup.com/${group}/events`);

      const meetups = await res.json();

      if (meetups?.errors?.[0]?.code === 'group_error') {
        spinner.warn(meetups.errors[0].message);

        process.exit(1);
      }

      if (!meetups.length) {
        spinner.stop();

        console.log('Not found upcoming events 😞');

        process.exit(1);
      }

      spinner.succeed(`Found ${meetups.length} events\n`);

      meetups.map((meetup: { [key: string]: string }, index: number) => {
        const { name, link, time } = meetup;

        const date = new Date(time);

        if (index !== 0) console.log('');

        console.log(
          `${chalk.bgBlue(name)}\n` +
            `\t${chalk.magenta('URL:')} ${link}\n` +
            `\t${chalk.magenta('When:')} ${twoDigit(date.getDate())}.${twoDigit(
              date.getMonth() + 1
            )}.${date.getFullYear()}, ${twoDigit(date.getHours())}:${twoDigit(
              date.getMinutes()
            )}`
        );
      });
    } catch {
      spinner.fail(chalk.red('Unable to check upcoming events'));

      process.exit(1);
    }
  });
