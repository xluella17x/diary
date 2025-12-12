const { Router } = require('express')
const countryController = require('../controllers/diaries')

const diaryRouter = Router()

countryRouter.get('/diary/all', diaryController.index)
diaryController.get('diary/:date',diaryController.show)
diaryController.get('/diary/post',diaryController.create)

module.exports = diaryController