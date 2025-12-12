const db = require('../database/connect')

class Diary {
    constructor({ diary_id, entry_title, date, diary_entry, category, time_of_day }) {
        this.diary_id = diary_id
        this.entry_title = entry_title
        this.date = date
        this.diary_entry = diary_entry
        this.time_of_day = time_of_day
        this.category = category
    }
    static async getAll() {
        const response = await db.query('SELECT * FROM diary;')
        if (response.rows.length === 0) {
            throw new Error('No entries available')
        }
        return response.rows.map(e => new Diary(e))
    }
}
module.exports = Diary