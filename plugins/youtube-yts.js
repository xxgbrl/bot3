/*
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
  if (!text) throw 'Cari apa?'
  const { video, channel } = await youtubeSearch(text)
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
š *${v.title}* 
š _${v.url}_
ā° Duration: ${v.durationH}
š¤ Uploaded ${v.publishedTime}
šļø ${v.view} views
      `.trim()
      case 'channel': return `
ā­āāāāāāāā¢ *CHANNEL*
āš *${v.channelName}* 
āš _${v.url}_
āš _${v.subscriberH} Subscriber_
āš„ ${v.videoCount} video
āāāāāāāāā¢
`.trim()
    }
  }).filter(v => v).join('\n\nāāāāāāāāāāāāāāāāāāāāāāāāāāā\n\n')
  m.reply(`*${htki} SEARCH ${htka}*\n\n` + teks)
}
*/
import yts from 'yt-search'
import fs from 'fs'

let handler = async (m, {conn, text }) => {
  if (!text) throw 'Cari apa?'
  await conn.reply(m.chat, global.wait, m)
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
Ā° *_${v.title}_*
ā³ š« *_Link :_* ${v.url}
ā³ š *_Duration :_* ${v.timestamp}
ā³ š„ *_Uploaded :_* ${v.ago}
ā³ š *_Views :_* ${v.views}`}}).filter(v => v).join('\n\nā¦ā¦ā¦ā¦ā¦ā¦ā¦ā¦ā¦ā¦ā¦ā¦ā¦ā¦ā¦ā¦ā¦ā¦ā¦ā¦ā¦ā¦ā¦ā¦ā¦ā¦ā¦ā¦ā¦ā¦\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}

handler.help = ['yts <query>']
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i

export default handler
