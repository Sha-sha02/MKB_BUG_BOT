//base by Malvin king 
//re-upload? recode? copy code? give credit ya :)
//YouTube: @Malvin King Tech 
//Instagram: malvinking20 
//Telegram: t.me/malvink1ng 
//GitHub: @malvinking 
//WhatsApp: +263714757857
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@speedtechi
                 
const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z'
global.ig = 'malvinking20' // ubah aja
global.email = 'malvink003@gmail.com' //serah
global.region = 'zimbabwe' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'ꪶ༺֎ᚏ༈࿉𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒⧉ᚙ֎⸙༻' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['263780166288'] // ubah aja pake nomor lu
//==========================zetsuboclient=======================//
global.botname = '⫹⸙⧉𝐌𝐊𝐁 𝐁𝐔𝐆 𝐕3⧉⸙⫺' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '⫹⸙⧉𝐌𝐊𝐁 𝐁𝐔𝐆 𝐕3⧉⸙⫺' // ubah aja ini nama sticker
global.author = '༻࿇𝐊𝐈𝐍𝐆_𝐌𝐀𝐋𝐕𝐈𝐍❖༺' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'classicsession'  //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.autoviewstatus = process.env.autoviewstatus || "TRUE"
global.wlcm = []
global.wlcmm = []
global.anticall = true
global.rn = 'typing'
/*
Declaring Menu type

V1 = Photo
V2 = Video
V3 = Text
V4 = Button

*/
global.menutype = "v1"
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 5
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
