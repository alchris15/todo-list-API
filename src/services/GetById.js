const Connection = require('../database/Connection')
/*

	>getbyId = 'select * from todos where number=[insert id here]'


*/
module.exports = async (id) => {
    const query = 'SELECT *  FROM `todo-list-mysql`.todos where id = '+id
    try {  
    console.log("myquery"+query)
    const results = await Connection(query)
 return results
    }
 catch (err) {
    console.log(query)
    return []

    }
}
