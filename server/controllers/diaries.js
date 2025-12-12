const Diary = require('../models/Diary');

async function index(req, res) {
    
    try {
        const diaries = await Diary.getAll();
        res.status(200).json(diaries);
    } catch(err) {
        res.status(500).json({err : err.message})
    }
}

async function show(req, res) {
    try {
        let date = req.params.date
        const diary = await Diary.getCountryByName(date)
        res.status(200).json(diary)
    } catch (err) {
        res.status(404).json({err : err.message})
    }
}

async function create(req,res) {
    try {
        const data = req.body
        const newDiary = await Diary.create(data)
        res.status(201).json(newDiary)
    } catch (err) {
        res.status(400).json({err : err.message})
    }
    
}


module.exports = {index, show, create}