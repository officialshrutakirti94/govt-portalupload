const mongoose=require ('mongoose');
const uploadSchema= new mongoose.Schema({
    img_name:String
})
mongoose.model('uploadDetails',uploadSchema)