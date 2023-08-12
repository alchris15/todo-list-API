const Connection = require('../database/Connection')
/*
1. Add new Column isComplete  - ✓ 
2. Adjust the query to include all new column  ✓
3. Number should be renamed as 'id'                ✓
4. id as primary key should be a seed or auto increment   ✓      
5. Add Git

number should not duplicate
*/
module.exports = async (id, todolist) => {
    try {
    const query = `INSERT INTO ` + 
                    `todos (id,todolist)` + 
                    `VALUES ` +
                    `('${id}', ('${todolist}'))`

console.log(todolist)
 await Connection(query)


 return true
} catch (err) {
    return false
}
}
