const Connection = require('../database/Connection')

https://www.w3schools.com/sql/sql_update.asp

module.exports = async (id,isCompleted) => {
    try {
        const query = "Update todos set isCompleted = 1" + 
        " where id = "+id
    //update table set column=value where columnwheretofind=valueowhattofind
    //5 51 500 50001
    //5%
        console.log(id)
    
 await Connection(query)


 return true
} catch (err) {
    return false
}
}