import { Telegraf } from "telegraf";
import fs from 'fs';
import { setTimeout } from "timers/promises";

const bot = new Telegraf(process.env.TELEGRAM_TOK);

bot.launch();

let msg = fs.readFileSync(process.stdin.fd, 'utf-8');

// -754555880 (group.id, taken from bot.start(..)
await bot.telegram.sendMessage('-754555880', msg);

await setTimeout(1000);

bot.stop();
