const { Router } = require('express')
const diaryController = require('../controllers/diaries')

const diaryRouter = Router()

diaryRouter.get('/diary/all', diaryController.index)
diaryRouter.get('/diary/:date',diaryController.show)
diaryRouter.post('/diary/post',diaryController.create)

module.exports = diaryRouter