/* jshint node: true, asi: true, laxcomma: true, esversion: 6 */
'use strict'

const fs = require('fs')
const path = require('path')

const compress = require('compression')
const serveStatic = require('serve-static')
const http =  require('http')

const app = require('connect')()

app.use(compress())

let staticPath = path.resolve(__dirname, 'dist')
app.use(serveStatic(staticPath))

//app.use('/', (req, res, next) => {
    //let indexPath = path.resolve(__dirname, 'index.html')
    //fs.createReadStream(indexPath).pipe(res)
//})

const server = http.createServer(app)

server.listen(process.env.PORT)

