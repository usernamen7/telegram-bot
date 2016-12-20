var Cron = require('cron').CronJob;
new Cron('* * * * * *',function() {
  console.log('Hello, Creator');
}, null, true, 'Ukraine/Kiev');
