const Connection = require('../database/Connection')
/** change the statement to Update using IsDeleted column instead of Delete statement 
 * SoftDelete
 * 
*/
module.exports = async (id) => {
    try {
    const query = `Delete from todos where id = ${id}`


 await Connection(query)

 return true
} catch (err) {
    return false
}
}
