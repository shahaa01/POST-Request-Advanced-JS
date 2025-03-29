//setting up the server
const express = require("express");
const app = express();

const port = 8080;

//setting up the view engine as EJS
app.set("view engine", "ejs"); //install ejs from npm

//setting up the path
const path = require('path');
app.set('views', path.join(__dirname, 'views'));

//we need to convert the data sent by post request in readable format
//to do that we use a middleware - express.urlencoded():
app.use(express.urlencoded({extended: true})); //this will parse the data

//now for express to also able to parse JSON data - we use another middleware - express.json()
app.use(express.json()); //this parses JSON data to readable format

app.post('/register', (req, res) => {
    //post request sned data to the body which we need to parse
    let {user , pw } = req.body; //the parsed data is sent to req.body
    res.send(`Post response - Welcome ${user}!`);
});


app.get('/register', (req, res) => {
    //get requests sends data through query string - after ? in URL
    let {user, password} = req.query; //query is the extra info after ? in URL
    res.send(`Get Response - Welcome ${user}`);
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});