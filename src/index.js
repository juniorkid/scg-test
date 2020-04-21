import express from 'express';
import bodyparser from 'body-parser'
import cache from 'memory-cache'
import 'dotenv/config';

import dosScgController from './controllers/dosScgController'

// configure cache middleware
let memCache = new cache.Cache();

const port = process.env.PORT || 3000

// duration seconds
let cacheMiddleware = (duration) => {
    return (req, res, next) => {
        let key =  '__express__' + req.originalUrl || req.url
        let cacheContent = memCache.get(key);
        if(cacheContent){
          console.log('cacheContent: ', cacheContent)
            res.send( JSON.parse(cacheContent) );
            return
        }else{
            res.sendResponse = res.send
            res.send = (body) => {
                memCache.put(key,body,duration*1000);
                res.sendResponse(body)
            }
            next()
        }
    }
}
const app = express();
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.listen(port, () =>
  console.log('Example app listening on port ', port),
)

app.get("/findXYZ", cacheMiddleware(600), (req, res) => {
  const problem = ['X', 'Y', 5, 9, 15, 23, 'Z']
  const x = dosScgController.findXYZ(problem.indexOf('X'))
  const y = dosScgController.findXYZ(problem.indexOf('Y'))
  const z = dosScgController.findXYZ(problem.indexOf('Z'))

  res.send ({
    x,
    y,
    z
  });
})

app.get("/findBC", cacheMiddleware(600), (req, res) => {
  const a = 21
  const b = dosScgController.findB(a)
  const c = dosScgController.findC(a)

  res.json ({
    b,
    c
  })
})

app.get("/findBestPath", cacheMiddleware(600), async (req, res) => {
  const origin = "Central World"
  const destination = "SCG Bangsue"

  const response = await dosScgController.findBestRoute(origin, destination)
  // console.log('response: ', response)

  res.json(response)
})

app.post('/webhook', async (req, res) => {
  console.log('req.body.events[0]: ', req.body.events[0])
  let reply_token = req.body.events[0].replyToken

  console.log('reply_token: ', reply_token)
  await dosScgController.replyMessage(reply_token)
  res.sendStatus(200)
})