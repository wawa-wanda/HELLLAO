
const fs = require('fs')
const chalk = require('chalk')

global.wlcm = []
global.ntnsfw = []
global.ntnsfww = []
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://wa.me/628975217200'
global.ig = 'https://www.instagram.com/wnd.prfct'
global.mygc = 'https://chat.whatsapp.com/EsIIgIYLoqqGM6WnMwdUaS'
global.myweb = 'https://github.com/wawa-wanda'
global.linkgrupss = "https://chat.whatsapp.com/EsIIgIYLoqqGM6WnMwdUaS
global.linkpro = 'mailto:support@whatsapp.com?subject=Deactivate%20My%20Account%20Number&body=Please%20Deactivate%20The%20My%20Account%20Number%20%2B62XXXXXXXX%20Immediately%20Because%20The%20Number%20Has%20Been%20Lost'
global.email = 'prwsetya@gmail.ckm'
global.region = '𝐀𝐑𝐀𝐁 𝐒𝐀𝐔𝐃𝐈'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = '𝚆𝚊𝚗𝚍𝚊 𝙿𝚛𝚊𝚜𝚎𝚝𝚢𝚊' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = '𝚂𝙰𝙽𝚂 𝙱𝙾𝚃' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = '𝐢𝐧𝐠𝐚𝐭𝐭!!! 𝐭𝐢𝐝𝐚𝐤 𝐬𝐞𝐦𝐮𝐚 𝐜𝐰𝐨𝐤 𝐢𝐭𝐮 𝐬𝐚𝐦𝐚 ,𝐡𝐚𝐧𝐲𝐚 𝐬𝐚𝐣𝐚 𝐜𝐞𝐰𝐞𝐤 𝐲𝐚𝐧𝐠 𝐬𝐞𝐥𝐚𝐥𝐮 𝐬𝐚𝐥𝐚𝐡 𝐦𝐞𝐧𝐢𝐥𝐚𝐢 𝐩𝐚𝐬𝐚𝐧𝐠𝐚𝐧 𝐧𝐲𝐚'//ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
// Other
global.owner = ['628975217200']
global.premium = ['628975217200']
global.packname = '𝚂𝙰𝙽𝚂 𝙱𝙾𝚃'
global.ownerr = ['𝚆𝚊𝚗𝚍𝚊 𝙿𝚛𝚊𝚜𝚎𝚝𝚢𝚊']
global.author = '𝚆𝚊𝚗𝚍𝚊 𝙿𝚛𝚊𝚜𝚎𝚝𝚢𝚊'
global.sessionName = './sessionye/session'
global.prefa = ['','!','.',',','🐤','🗿']
global.sp = '⭔'
global.mess = {
    nsfw: '*Fitur NSFW tidak diaktifkan, chat admin grup atau owner sans bot supaya diaktifkan*_',
    wait: '*Loading...Sabarrr Ngentodd*_',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Owner Sans Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    verif: 'Hai Kakak 👋 Silahkan Verifikasi Terlebih Dahulu Agar Bisa Menggunakan SANS BOT',
}
//=================================================//
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
//=================================================//
global.limitawal = {
    premium: "Infinity",
    free: 100
}
   global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//=================================================//
global.thumb = fs.readFileSync("./baseikal/image/haikal.jpg")
global.visoka = fs.readFileSync("./baseikal/image/haikal.jpg")
global.log0 = fs.readFileSync("./baseikal/image/haikal.jpg")
global.menuimg = 'https://k.top4top.io/p_2388xws321.jpg'
global.ggikal = fs.readFileSync("./baseikal/image/haikal.jpg")
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
