const Connection = require('../database/Connection')
/*
	>searchByTitle = 'select * from todos where todolist like '%eat%'
    https://www.w3schools.com/sql/sql_like.asp

*/
module.exports = async (search) => {
    try {
    const query = `SELECT * FROM` +
                        `todos` + 
                        `WHERE ` +
                        `search = ${search} ` 


 const results = await Connection(query)

 return results
} catch (err) {
    return []
    }
}