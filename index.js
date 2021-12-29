const Discord = require('discord.js');
// const client = new Discord.Client();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const fetch = require("node-fetch");


// Stores the key needed to store the TOKEN + Logging in
require('dotenv').config();
client.login(process.env.TOKEN);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} and ready to work for you!`);
});


client.on('message', async msg =>{
    // Basic reply
    if(msg.content === 'ping'){
        msg.reply('pong');
    }
    // Practice APIS
    if(msg.content === '$neko'){
        getNeko(msg);
    }
    // Gives the user their pfp
    if(msg.content === '$a'){
        msg.reply(msg.author.displayAvatarURL());
    }
    if(msg.content === '$b'){
        const attachment = new Discord.MessageAttachment('https://external-preview.redd.it/bksqZ3VH5IFPT7BbxzvmTd8cUM28ZTXpQzsjzi9ADZY.jpg?auto=webp&s=9ec16f87253ce9a5478e46b8840ece28a6b2b12e');
        // Pings the person too!
        msg.channel.send(`Get blocked ${msg.author},`, attachment);
    }
    if(msg.content === '$j'){
        if(msg.member.voice.channel){
            const connection = await msg.member.voice.channel.join();
        }else{
            msg.reply('You need to join a channel baka! ^_^');
        }
    }
    if(msg.conent === '$l'){

    }
})

// Should make this generic later
async function getNeko(msg) {
    const res = await fetch('https://api.waifu.pics/sfw/neko');
    const data = await res.json();
    msg.channel.send(data.url);
}