const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'

client.on('message', function(message) {
    const myID = "303197992809267202";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "changename")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('DoNe , :rose:');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "settwitch")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('DonE , :heart: ');
        client.user.setGame(args , 'https://twitch.tv/6xlez1');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "listen")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('DonE , :rose: ');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
    });
    }
});





// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
