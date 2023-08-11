require('./models/db')
const express=require ('express')
const mongoose=require('mongoose')
const uploads=mongoose.model('uploadDetails')
const app=express();
const multer=require('multer')
// const bodyParser= require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine','ejs');
app.use(express.static('public'));
var image_name='';
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        img_name=file.originalname;
      cb(null, file.originalname);
    }
  });
  const upload = multer({ storage: storage });
app.get('/',(req,res)=>{
    res.render('index')
})
app.post('/aadhar',upload.single("adhar"),(req,res)=>{
    var x=req.body;
    console.log(x)
    res.redirect('/')
})
app.listen(3000,()=>{
    console.log('Server is online')
})