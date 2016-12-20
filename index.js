import TelegramBot from 'node-telegram-bot-api';
import {CronJob} from 'cron';
import request from 'request';
import {AllHtmlEntities} from 'html-entities';

var entities = new AllHtmlEntities(),
    token = '251474889:AAGEz5rQLAa-P-fdGtD9z77RdY49pf8I3tc';
//not one time use
var bot = new TelegramBot(token, { polling: true });
//message processing
bot.on('message', (msg) => {
  var id = msg.from.id,
  url = 'http://www.umori.li/api/random?site=bash.im&name=bash&num=1'

  request(url, (error, response, body) => {
    var data = JSON.parse(body);
    bot.sendMessage(id, entities.decode(data[0].elementPureHtml));
  })
});
