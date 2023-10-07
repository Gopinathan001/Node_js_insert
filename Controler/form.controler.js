const asynchandler = require('express-async-handler');
const path = require('path') 
const { clientDb, addToDb, checkEmail, getin }= require("../pgDatabase");
const { response } = require('express');



const getData=asynchandler(async(req,res)=>{
    // res.sendFile(path.join(__dirname,'../','public', 'home.html'));
});

const enterds =asynchandler(async (req, res) => {
    // res.sendFile(path.join(__dirname,'../','public', 'inputData.html'));
    const {username,email,Place,jobname,phone}=req.body
    clientDb.query(checkEmail,[email], (error, results)=>{
        if (results.rows.length){
            res.send("Email already exists.");
        }
        try{
            const data = [username,email,Place,jobname,phone];
            clientDb.query(addToDb,data);
            res.status(201).json({ message: 'Details Created Successfully!' });
        }
        catch(error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'An error occurred' });
        }
    });
});

const views=asynchandler(async(req,res)=>{
    // res.sendFile(path.join(__dirname,'../','public', 'views.html'));
    let getData=await clientDb.query(getin,(error,results)=>{
        if(error){
            res.status(500)
            res.send(error)
        }else{
            res.status(200)
            res.send(results)
        }
    })  
});



module.exports={getData,
    enterds,
    views};