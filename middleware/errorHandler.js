const errorHandler = (err, req, res, next)=>{
const statusCode = res.statusCode? res.statusCode : 500;
const {constants} = require("../constants");



switch(statusCode){
    case constants.VALIDATION_ERROR:
    res.json({
        title:"validation Failed",
        message:err.message,
        stackTrace:err.stack,
    });

    break;
    case constants.NOT_FOUND:
        res.json({
            title:"Not found",
            message:err.message,
            stackTrace: err.stack,
        })
        break;
      case constants.UNAUTHORIZED:
        res.json({
            title:"unauthorized",
            message:err.message,
            stackTrace: err.stack,
        })
        break;
      case constants.FORBIDDEN:
        res.json({
            title:"forbidden",
            message:err.message,
            stackTrace: err.stack,
        })
        break;
       case constants.SERVER_ERROR:
        res.json({
            title:"server error",
            message:err.message,
            stackTrace: err.stack,
        })
        default:
        console.log("non error or good")
        break;
}


};

module.exports = errorHandler;



