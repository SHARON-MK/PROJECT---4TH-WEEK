var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  if(req.session.login){
    res.redirect('/users')
  }else{
     res.render('login', { title: 'Login Page' });
  }
 
});

router.post('/login',(req,res)=>{
  const email = req.body.email
  const password = req.body.password
  const mypasword = "12345"
  const myemail = "sharon@gmail.com"
  if(myemail===email){
    if(password === mypasword){
      req.session.login = true;
      res.redirect('/users')
    }else{
      res.render('login',{error:"invalid credentials"})
    }
  }else{
    res.render('login',{error:"invalid credentials"})
  }
})
module.exports = router;


