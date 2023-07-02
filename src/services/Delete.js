const Connection = require('../database/Connection')
/** change the statement to Update using IsDeleted column instead of Delete statement */
module.exports = async (id) => {
    try {
    const query = `DELETE FROM ` + 
                    `todos ` + 
                    `WHERE ` +
                    `id = ${id}`


 await Connection(query)

 return true
} catch (err) {
    return false
}
}
