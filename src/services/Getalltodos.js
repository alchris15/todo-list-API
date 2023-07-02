const Connection = require('../database/Connection')
/*
4. Add Filters for Get endpoints
	>getall = select * from todos

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