const Connection = require('../database/Connection')
/*
4. Add Filters for Get endpoints
	>getall = select * from todos   ✓
	>getbyId = 'select * from todos where number=[insert id here]' ✓
	>searchByTitle = 'select * from todos where todolist like '%eat%' 
	>getbyColumnName = already existing just rename

*/
module.exports = async (fields) => {
    try {
    const query = `SELECT ` +
                    `${fields} ` +
                    `FROM ` +
                        `todos`


 const results = await Connection(query)

 return results
} catch (err) {
    return []
    }
}
