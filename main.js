#! /usr/bin/env node
console.log(chalk.red `${"=".repeat(50)}`);
console.log(chalk.bold.greenBright `\n\t WELCOME TO WORD COUNTER APPLICATION \t\n`);
console.log(chalk.red `${"=".repeat(50)}`);
import chalk from "chalk";
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "enter the sentence for count the words"
    }
]);
const words = answer.sentence.trim().split(" ");
console.log(chalk.rgb(255, 165, 0)(words));
// console.log(chalk.magenta`YOUR SENTENCE WORD COUNT IS: ${chalk.cyan(words.length)}`);
console.log(chalk.magenta("\nYOUR SENTENCE WORD COUNT IS:") + "  " + chalk.rgb(0, 128, 128)(words.length));
console.log(chalk.bold.redBright `\n\t======= THE END =======  \t\n`);
