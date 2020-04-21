import express from 'express';
import bodyparser from 'body-parser'
import cache from 'memory-cache'
import 'dotenv/config';

import findXYZ from './functions/findXYZ'
import { findB, findC } from './functions/findBC'
import findBestRoute from './functions/findBestRoute'

// configure cache middleware
let memCache = new cache.Cache();

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

// app.use(bodyparser);

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
)

app.get("/", cacheMiddleware(60), (req, res) => {
  res.send ("Hello world...");
})

app.get("/findXYZ", cacheMiddleware(60), (req, res) => {
  const problem = ['X', 'Y', 5, 9, 15, 23, 'Z']
  const x = findXYZ(problem.indexOf('X'))
  const y = findXYZ(problem.indexOf('Y'))
  const z = findXYZ(problem.indexOf('Z'))

  res.send ({
    x,
    y,
    z
  });
})

app.get("/findBC", cacheMiddleware(60), (req, res) => {
  const a = 21
  const b = findB(a)
  const c = findC(a)

  res.json ({
    b,
    c
  })
})

app.get("/findBestPath", cacheMiddleware(60), async (req, res) => {
  const origin = "Central World"
  const destination = "SCG Bangsue"

  const response = await findBestRoute(origin, destination)
  console.log('response: ', response)

  res.json(response)
})