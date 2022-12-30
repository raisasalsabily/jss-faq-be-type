// import dotenv from "dotenv"
// dotenv.config()
require("dotenv").config({ path: "./.env" })

import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import morgan from "morgan"

// alt
const dbConnect = require("./config/database")

// middleware
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan("dev"))
app.use(cookieParser())

// Routes
app.get("/", (req, res) => {
  res.json({ msg: `Hello world (2)` })
})

// Database
app.get("/", (req, res) => {
  res.json({ msg: "MongoDB tersambung" })
})

// server listening
const PORT = process.env.PORT || 5000
app.listen(PORT, async () => {
  // console.log(`Server listening di port ${PORT}`)
  try {
    await dbConnect()
    console.log(`Server listening di port ${PORT}`)
  } catch (err) {
    console.log(err)
  }
})
