import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const riddle = Math.floor(Math.random() * 101);

const rl = readline.createInterface({ input, output });

console.log("Загадано число в диапазоне от 0 до 100");

const game = async () => {
  const answer = await rl.question("");
  if (answer === "" || Number.isNaN(+answer)) {
    console.log("Введите число!");
    game();
    return;
  }
  if (+answer === riddle) {
    console.log(`Отгадано число ${riddle}`);
    rl.close();
    return;
  }
  +answer > riddle ? console.log("Меньше") : console.log("Больше");
  game();
};
game();
