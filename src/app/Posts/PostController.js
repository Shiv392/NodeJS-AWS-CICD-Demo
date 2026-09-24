const {getAllPost} = require('./PostService')

const getPostController = async(req, res)=>{
try{
    const data = await getAllPost();
    return res.status(200).json({
        success : true,
        message : "Post fetched successfully",
        data
    })
}
catch(error){
    return res.status(500).json({
        success : false,
        message : error?.message || "Serve error"
    })
}
}
module.exports = {getPostController};