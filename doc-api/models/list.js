var mongoose= require("mongoose")

var listSchema= new mongoose.Schema({
absence: String,
reason:String,
start_date:Date,
end_date:Date,
created_date:{
    type: Date,
    default: Date.now
}

})

var List= mongoose.model("List", listSchema);

module.exports= List;