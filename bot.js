const Discord = require('discord.js');
const moment = require("moment");
const fs = require("fs");
const client = new Discord.Client();
 const prefix = "$";
client.on('ready', () => {
    console.log('Devloper : Loss/ Saud');
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
