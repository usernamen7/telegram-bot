var TelegramBot = require('node-telegram-bot-api');
    token = '251474889:AAGEz5rQLAa-P-fdGtD9z77RdY49pf8I3tc';

var bot = new TelegramBot(token, { polling: true });

bot.on('message', function(msg) { //обробка повідомленнь
  var id = msg.chat.id;
  bot.sendMessage(id, msg.text);
  //console.log(msg);
})
