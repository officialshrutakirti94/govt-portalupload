require('./models/db')
const express=require ('express')
const mongoose=require('mongoose')
const upload_img=mongoose.model('uploadDetails')
const app=express();
const multer=require('multer')
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine','ejs');
app.use(express.static('public'));
var adhar_img='';
var pan_img='';
var voter_img='';
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'public/uploads');
    },
    filename: function(req, file, cb) {
      adhar_img=file.originalname;
      pan_img=file.originalname;
      voter_img=file.originalname;
      cb(null, file.originalname);
    }
  });
  const upload = multer({ storage: storage });
app.get('/',(req,res)=>{
    res.render('index')
})
app.post('/aadhar',upload.single('adhar_img'),(req,res)=>{
  console.log(req.body.adhar_img)
    var x= new upload_img(req.body);
    console.log(x)
    x.adhar_img=adhar_img
    x.save()
    .then((result)=>{
      console.log('data saved')
    })
    .catch((err)=>{
      console.log('error'+err)
    })
    res.redirect('/')
})
app.post('/pan',upload.single('pan_img'),(req,res)=>{
  console.log(req.body.pan_img)
    var x= new upload_img(req.body);
    console.log(x)
    x.pan_img=pan_img
    x.save()
    .then((result)=>{
      console.log('data saved')
    })
    .catch((err)=>{
      console.log('error'+err)
    })
    res.redirect('/')
})
app.post('/voter',upload.single('voter_img'),(req,res)=>{
  console.log(req.body.voter_img)
    var x= new upload_img(req.body);
    console.log(x)
    x.voter_img=voter_img
    x.save()
    .then((result)=>{
      console.log('data saved')
    })
    .catch((err)=>{
      console.log('error'+err)
    })
    res.redirect('/')
})
app.listen(3000,()=>{
    console.log('Server is online')
})