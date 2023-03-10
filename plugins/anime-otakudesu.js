import { otakudesu } from 'hxz-api'
import fetch from 'node-fetch'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    //let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!text) throw `Use example ${usedPrefix}${command} Anime`
    let result = await otakudesu(text)
    let datathumb = await(await fetch(result.img)).buffer()
    let otaku = `
๐ *JUDUL:* ${result.judul}
๐ *JEPANG:* ${result.jepang}
โญ *RATE:* ${result.rate}
๐ *PRODUSER:* ${result.produser}
๐ *TIPE:* ${result.tipe}
๐ *STATUS:* ${result.status}
๐ *EPISODE:* ${result.episode}
๐ชง *DURASI:* ${result.durasi}
๐ *RILIS:* ${result.rilis}
๐ *STUDIO:* ${result.studio}
๐ *GENRE:* ${result.genre}
๐ *DESC:* ${result.desc}
๐ *BATCH:* ${result.batch}
๐งท *BATCHSD:* ${result.batchSD}
๐ *BATCHHD:* ${result.batchHD}
`
await conn.sendButtonImg(m.chat, datathumb, otaku, wm, 'menu', '.menu', m)
}

handler.help = ['otakudesu <judul>']
handler.tags = ['anime']
handler.command = /^otakudesu$/i
handler.group = false
handler.limit = true
export default handler
