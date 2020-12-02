require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!')
  }

  if (msg.content === '!whoami') {
    msg.reply('hm.. let me think')
    msg.channel.send(`you are ${msg.member.displayName}!`)
    msg.react('❤️')
    // console.log(`Hello from ${user}`)
  }
})

client.login(process.env.BOT_TOKEN);