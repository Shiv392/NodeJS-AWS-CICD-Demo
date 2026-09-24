const axios = require('axios');

const getAllPost = async()=>{
    const url = "https://jsonplaceholder.typicode.com/posts";
    const data = await axios.get(url);
    return data.data;
}

module.exports = {getAllPost}