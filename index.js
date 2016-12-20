var TelegramBot = require('node-telegram-bot-api');
    Cron = require('cron').CronJob,
    request = require('request'),
    token = '251474889:AAGEz5rQLAa-P-fdGtD9z77RdY49pf8I3tc';

var bot = new TelegramBot(token, { polling: true }); //неодноразове виконання

bot.on('message', function(msg) { //обробка повідомленнь
  var id = msg.chat.id;
  bot.sendMessage(id, msg.text);
  console.log(msg);
})

var job = new Cron('0,5 * * * * * ', function() { //message every sec
  console.log('Hello');
  var chatId = 220715725,
      url = 'http://www.umori.li/api/random?site=bash.im&name=bash&num=2'

  request(url, function (error, response, body) {
    var data = JSON.parse(body);
    bot.sendMessage(chatId, data[0].elementPureHtml);
    //console.log(data);
  })
});

job.start();
