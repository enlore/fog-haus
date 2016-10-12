"use strict"

const fs = require("fs")
const path = require("path")

if (process.env.NODE_ENV !== "production")
    require("dotenv").config()

const config = {
    fromAddress: "Fog Concierge <concierge@fog.haus>",
    to: "inquiries@fog.haus, ameer@fog.haus, alex@fog.haus, n.e.lorenson@gmail.com",
    subject: "Inquiry"
}

const bodyParser = require("body-parser")
const express = require("express")
const app = express()

const MailGun = require("./mg")
const MGEmail = require("./mgEmail")

const mailer = new MailGun({
    domain: process.env.MG_DOMAIN,
    apiKey: process.env.MG_KEY
})

app.use(bodyParser.json())

app.use("/", (req, res, next) => {
    console.info("got a request at " + req.url)
    next()
})

let staticDir = path.resolve(process.cwd(), process.env.STATIC_DIR || "dev")

if (process.env.NODE_ENV === "production")
    staticDir = "/app/dist"

fs.readdir("/app", (err, dir) => {
    if (err) console.error(err)
    else console.info(dir)
})

app.use(express.static(staticDir))

app.post("/inquiry", (req, res, next) => {
    const inquiry = {
        company: req.body.company,
        industry: req.body.industry,
        product: req.body.product,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        website: req.body.website
    }

    console.info("inquiy message: ", inquiry)

    const email = new MGEmail({
        //to: `${inquiry.name} <${inquiry.email}>`,
        to: config.to,
        from: config.fromAddress,
        subject: config.subject,
        text: JSON.stringify(inquiry, null, 2),
        html: "<pre>" + JSON.stringify(inquiry, null, 2) + "</pre>",
    }, { testMode: false })

    mailer.send({ email: email }, (err, mgRes) => {
        if (err) next(err);
        else {
            res.json({ status: 200, statusMessage: "OK" })
        }
    })
})

app.use((err, req, res, next) => {
    console.error(err)
    res.json({ status: 500, statusMessage: "Server error - try again" })
})

app.listen(process.env.PORT || 3000, () => {
    console.info("Hey we're doin it")
    console.info(`Serving static files from ${staticDir}`)
})
