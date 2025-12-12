const express = require('express')
const cors = require('cors')
const logger = require('./logger')
const countryRouter = require('./routers/diaries')

const app = express()

app.use(cors())
app.use(logger)
app.use(express.json())
app.use('/diaries', diaryRouter)

module.exports = app