const express = require("express");
const app = express();
const pug = require('pug');
const fetch = require('node-fetch');

const bodyParser = require("body-parser");

app.use(bodyParser.json());

// static files
app.use(express.static('public'));

// pug
app.set('view engine','pug'); 

app.get('/',async(req,res) => {
    
    const data = await fetch("https://neelpatel05.pythonanywhere.com");        
    const datos =  await data.json();    
    res.render("index",{
        datos
    });       
     
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port,() => {
    console.log(`Server on port ${port}`);
});