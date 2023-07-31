const Connection = require('../database/Connection')
const Update = require('./Update')


module.exports = async (id) => {
    try {
    const query = "Update todos set isDeleted = 1" + 
    " where id = "+id

    


 await Connection(query)


 return true
} catch (err) {
    return false
}
}