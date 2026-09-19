const axios = require('axios');

const getTodoList = async()=>{
    const url = "https://jsonplaceholder.typicode.com/todos";

    const data = await axios.get(url);
    return data.data;
}

module.exports = {getTodoList}