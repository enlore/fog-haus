"use strict"

const express = require("express")
const app = express()

app.use("/", (req, res, next) => {
    console.info("got a request at " + req.url)
    next()
})

app.use(express.static(__dirname))

app.listen(process.env.PORT, () => {
    console.info("Hey we're doin it")
})
