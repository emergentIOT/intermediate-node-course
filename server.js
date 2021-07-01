const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const app= express();
const User=require('./models/User');
mongoose.connect('mongodb://localhost/userData')

app.use(bodyParser.json());

app.listen(8000, ()=>{console.log(`server is listening on port:8000`)})

// CREATE
app.post('/users',(req,res)=>{

  User.create({
    name: req.body.newData.name,
    email: req.body.newData.email,
    password: req.body.newData.password
  }, (err, data)=> {
    if(err){
      res.json({success: true, message: err})
    } else if(!data) {
      res.json({success: true, message:"Not found"})
    } else {
      res.json({success: true, data: data})
    }
  })
 
})

app.route('/users/:id')
// READ
.get((req,res)=>{
  User.findById(req.params.id, (err, data)=>{
    if(err) {
      res.json({
        success: false,
        data: "User not found"
      }) 
    } else if(!data) {
      res.json({
        success: false
      })   
    } else {
      res.json({
        success: true,
        data: data
      })
    }
  })
})
// UPDATE
.put((req,res)=>{
  User.findByIdAndUpdate(req.params.id, {
    name: req.body.newData.name,
    email: req.body.newData.email,
    password: req.body.newData.password
  }, {
    new: true
  }, (err, data) => {
    if(err) {
      res.json({success:false})
    } else if(!data) {
      res.json({success: false, data:'Data not updated'})
    } else {
      res.json({success: true, data:data})
    }
  })
})
// DELETE
.delete((req,res)=>{
  User.findByIdAndDelete(req.params.id, (err, data) => {
    if(err) {
      res.json({success: false})
    } else if(!data) {
      res.json({success: false, data: 'No data found with this id'})
    } else {
      res.json({success: true, data:`User deleted with id ${req.params.id}`})
    }
  })
})