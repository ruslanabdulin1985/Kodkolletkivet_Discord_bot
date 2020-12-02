require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()
const http = require('http')
const port = 8080

// start server just to bind a port
http.createServer((req, res) => {
    res.writeHead(200)
    res.end('Hello world Ruslan\n')
}).listen(port)

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