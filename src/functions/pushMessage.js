import fetch from "node-fetch"

export default async (id, message) => {
  let headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.LINE_TOKEN}`
  }
  let body = JSON.stringify({
      to: id,
      messages: [{
          type: 'text',
          text: message
      }]
  })
  
  const res = await fetch('https://api.line.me/v2/bot/message/push', {
    method: 'post',
    body,
    headers
  })

  return res
}