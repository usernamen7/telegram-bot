var TelegramBot = require('node-telegram-bot-api');
    Cron = require('cron').CronJob,
    request = require('request'),
    token = '251474889:AAGEz5rQLAa-P-fdGtD9z77RdY49pf8I3tc';

var bot = new TelegramBot(token, { polling: true }); //неодноразове виконання

var job = new Cron('0,30 * * * * * ', function() { //message every sec
  console.log('Hello');
});

job.start();

bot.on('message', function(msg) { //обробка повідомленнь
  var id = msg.chat.id;
  bot.sendMessage(id, msg.text);
  //console.log(msg);
})
