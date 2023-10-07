const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const pgDB = require("./pgDatabase")
const port = process.env.port || 8000;
const getRouter = require('./Router/form.rout');


app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(cors());
app.use(express.json());  
app.use('/',getRouter);








app.listen(port,()=>{
    console.log(`server runing on http://localhost:${port}`);
});