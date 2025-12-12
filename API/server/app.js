const express = require('express')
const cors = require('cors')
const logger = require('./logger')
const diaryRouter = require('./routers/diaries')

const app = express()

app.use(cors())
app.use(logger)
app.use(express.json())
app.use('/', diaryRouter)

app.get("/", (req, res) => {
  res.status(200).json({
    title: "Diary",
    description: "Diary Project"
  })
})

module.exports = app