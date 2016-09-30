"use strict"

const express = require("express")
const app = express()

app.use(express.static(__dirname))

app.use("/", (req, res, next) => {
    console.info("got a request at " + req.url)
    next()
})

app.listen(process.env.PORT)
