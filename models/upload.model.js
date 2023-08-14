const mongoose=require ('mongoose');
const uploadSchema= new mongoose.Schema({
    adhar_img:{type:'String',default:'NA'},
    pan_img:{type:'String',default:'NA'},
    voter_img:{type:'String',default:'NA'}
})
mongoose.model('uploadDetails',uploadSchema)