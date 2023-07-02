const Connection = require('../database/Connection')
/* Add new Endpoint to Accept TodoList IsCompleted */
module.exports = async (number, todolist) => {
    try {
    const query = `UPDATE ` + 
                    `todos ` + 
                    `SET ` +
                    `todolist = '${todolist}' `  + 
                    `WHERE ` +
                    `number = ${number}`
                  

  await Connection(query)

 return true
} catch (err) {
    return false
    }
}
