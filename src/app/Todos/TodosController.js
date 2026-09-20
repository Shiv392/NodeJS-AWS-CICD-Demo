const {getTodoList} = require('./TodoService')

const TodosController = async(req, res)=>{
try{
    const data = await getTodoList();
    return res.status(200).json({
        success : true,
        message : "Todo list data",
        data
    })
}
catch(error){
    return res.status(500).json({
        success : false,
        message : "server problem"
    })
}
}

module.exports = TodosController;