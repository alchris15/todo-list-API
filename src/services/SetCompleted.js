const Connection = require('../database/Connection')

https://www.w3schools.com/sql/sql_update.asp

module.exports = async (id,isCompleted) => {
    try {
    const query = `INSERT INTO ` + 
                    `todos (id, isCompleted)` + 
                    `VALUES ` +
                    `('${id}', ('${isCompleted}'))`

console.log(todolist)
 await Connection(query)


 return true
} catch (err) {
    return false
}
}