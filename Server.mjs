import express from 'express'
import bodyParser from 'body-parser'

const app = express();

const port = 5000;

app.use(bodyParser.json({extended:true}));

app.get("/login",(req,res)=>{
  if(req.body.userName==="admin" && req.body.password==="admin"){
    res.status(200)
    res.setHeader('Content-Type','application/json')
    res.send(JSON.stringify({greetings:"hello"}))
  }
})

app.listen(port,()=>{console.log("server Started at 5000")})
