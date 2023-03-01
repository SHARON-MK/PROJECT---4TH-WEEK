var express = require('express');
var router = express.Router();


let array = [
  {
    name:"WATERYY",
    image:'https://img.freepik.com/free-vector/flat-design-nft-concept-illustration_23-2148955646.jpg?w=740&t=st=1677588445~exp=1677589045~hmac=56b6f2c675c4ac8fddf279170977e6aedb0573acd84014968985ef8b30034fd1',
    descrition:'Grab this product, make it yours'

  },
  {
    name:"NFT ",
    image:'https://img.freepik.com/free-vector/crazy-style-technology-illustration_52683-93854.jpg?w=740&t=st=1677588892~exp=1677589492~hmac=81a547415a7ec6b14d7b2c07f88ddc28c7bb88d24aa3ef772dba7c4b96fe931e',
    descrition:'NFT owners has a dignity'

  },
  {
    name:"MODERN",
    image:'https://img.freepik.com/free-vector/crazy-style-technology-illustration_52683-93860.jpg?w=740&t=st=1677588556~exp=1677589156~hmac=0b25e6e8dc506c64e6de3fc5ee81df59b680fdb99d2511b5db012faddce1e498',
    descrition:'Lets change things together'

  },
  {
    name:"ILLUSION",
    image:'https://img.freepik.com/free-photo/beautiful-roman-figure-statue_23-2149444218.jpg?w=900&t=st=1677588616~exp=1677589216~hmac=45450fb5117ee7ce94aa519c56d7ad7160d997d8b5b1cb5db38f706513aec9e5',
    descrition:'The world is full of illlusions'

  }
]



/* GET users listing. */
router.get('/', function(req, res, next) {
  let randomNum = Math.floor(Math.random() * 100);
  if(req.session.login){
    res.render('home', { title: 'home' , num : randomNum , array});
  }else{
    res.redirect('/')
  }
});

router.get('/logout',(req,res,next)=>{
  req.session.destroy()
  res.redirect('/')
})
module.exports = router;
