const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', (message) => {
  console.log(message.channel.id);
  if(message.channel.id.indexOf('channel.isPrivate') == 1) {
    msg.author.sendMessage("``` [ O BOT SÓ FUNCIONA NO GRUPO ]```")
    return;
  } 
 });

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
