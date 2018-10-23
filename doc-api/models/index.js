var mongoose= require("mongoose")
mongoose.set("debug" , true);
mongoose.connect("mongodb://localhost/doc-api",{ useNewUrlParser: true });


mongoose.Promise=Promise;

module.exports.List=require("./list");