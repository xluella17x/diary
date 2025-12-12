const db = require('../database/connect')

class Diary {
    constructor({ diary_id,entry_title,date,diary_entry,time_of_day }) {
        this.diary_id = diary_id
        this.entry_title = entry_title
        this.date = date
        this.diary_entry = diary_entry
        this.time_of_day = time_of_day
    }
}