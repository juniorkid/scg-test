import fetch from "node-fetch"

export default async (reply_token, message) => {
  let headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.LINE_TOKEN}`
  }
  let body = JSON.stringify({
      replyToken: reply_token,
      messages: [{
          type: 'text',
          text: message
      }]
  })
  
  const res = await fetch('https://api.line.me/v2/bot/message/reply', {
    method: 'post',
    body,
    headers
  })

  return res
}