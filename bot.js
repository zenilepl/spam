const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

let channel =     client.channels.get("515583737656901679")

client.login(process.env.BOT_TOKEN);
