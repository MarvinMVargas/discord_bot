// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
var ready = true;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

    var message = msg.content.toLowerCase();
    var voiceChannel = msg.member.voice.channel;
        if(message.includes('callate')){
            ready = true;
            voiceChannel.leave();
        }

        if (ready && message.includes('perro')) {
            ready = false;
            if(!voiceChannel){
                ready = true;
                return msg.reply('Metase a un canal de voz primero mijo, no sea pendejo');
            }
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.play('./perros.mp3');
                dispatcher.on('finish', end => {ready = true;voiceChannel.leave();});
            }).catch(err => console.log(err));
        };

        if (ready && message.includes('vitacilina')) {
            ready = false;
            if(!voiceChannel){
                ready = true;
                return msg.reply('Metase a un canal de voz primero mijo, no sea pendejo');
            }
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.play('./vitacilina.mp3');
                dispatcher.on('finish', end => {ready = true;voiceChannel.leave();});
            }).catch(err => console.log(err));  
        };

        if (ready && message.includes('bonk')) {
            ready = false;
            if(!voiceChannel){
                ready = true;
                return msg.reply('Metase a un canal de voz primero mijo, no sea pendejo');
            }
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.play('./bonk.mp3');
                dispatcher.on('finish', end => {ready = true;voiceChannel.leave();});
            }).catch(err => console.log(err));            
        };

        if (ready && message.includes('dragon')) {
            ready = false;
            if(!voiceChannel){
                ready = true;
                return msg.reply('Metase a un canal de voz primero mijo, no sea pendejo');
            }
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.play('./dragon.mp3',{volume : 0.5});
                dispatcher.on('finish', end => {ready = true;voiceChannel.leave();});
            }).catch(err => console.log(err)); 
        };

        if (ready && (message.includes('mm') || message.includes('huh'))) {
            ready = false;
            if(!voiceChannel){
                ready = true;
                return msg.reply('Metase a un canal de voz primero mijo, no sea pendejo');
            }
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.play('./hmm.mp3');
                dispatcher.on('finish', end => {ready = true;voiceChannel.leave();});
            }).catch(err => console.log(err));
        };

        if (ready && message.includes('piripitiflautica')) {
            ready = false;
            if(!voiceChannel){
                ready = true;
                return msg.reply('Metase a un canal de voz primero mijo, no sea pendejo');
            }
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.play('./gorda.mp3');
                dispatcher.on('finish', end => {ready = true;voiceChannel.leave();});
            }).catch(err => console.log(err));
        };

        if (ready && message.includes('jaja')) {
            ready = false;
            if(!voiceChannel){
                ready = true;
                return msg.reply('Metase a un canal de voz primero mijo, no sea pendejo');
            }
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.play('./risas.mp3');
                dispatcher.on('finish', end => {ready = true;voiceChannel.leave();});
            }).catch(err => console.log(err));
        };

        if (ready && message.includes('ba-dum')) {
            ready = false;
            if(!voiceChannel){
                ready = true;
                return msg.reply('Metase a un canal de voz primero mijo, no sea pendejo');
            }
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.play('./badum.mp3');
                dispatcher.on('finish', end => {ready = true;voiceChannel.leave();});
            }).catch(err => console.log(err));
        };

        if (ready && message.includes('hero')) {
            ready = false;
            if(!voiceChannel){
                ready = true;
                return msg.reply('Metase a un canal de voz primero mijo, no sea pendejo');
            }
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.play('./hero.mp3');
                dispatcher.on('finish', end => {ready = true;voiceChannel.leave();});
            }).catch(err => console.log(err));
        };

        if (ready && message.includes('negro')) {
            ready = false;
            if(!voiceChannel){
                ready = true;
                return msg.reply('Metase a un canal de voz primero mijo, no sea pendejo');
            }
            voiceChannel.join().then(connection =>{
                const dispatcher = connection.play('./black_spiderman.mp3');
                dispatcher.on('finish', end => {ready = true;voiceChannel.leave();});
            }).catch(err => console.log(err));
        };
        
  });

client.login('NzE3MjI3NDI3Mzk0NDg2Mjgz.XtXz4w.iTRESNc20DtmIYKZdXCc4dsCbyA');

