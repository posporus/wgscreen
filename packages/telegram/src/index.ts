const BOT_TOKEN = '1079748976:AAEbYnMgSjfuRVjb-BQrxw1049Bx2R7LD6g'
import { Bot } from "grammy"
import { Menu } from "@grammyjs/menu"

// Create an instance of the `Bot` class and pass your authentication token to it.
const bot = new Bot(BOT_TOKEN); // <-- put your authentication token between the ""

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
// Handle other messages.

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.


const menu = new Menu("my-menu-identifier")
.text("A", (ctx) => ctx.reply("You pressed A!")).row()
.text("B", (ctx) => ctx.reply("You pressed B!"));

bot.use(menu)

bot.on("message", (ctx) => ctx.reply("Got another message!",{ reply_markup: menu }));
bot.start();