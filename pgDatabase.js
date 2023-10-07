const {response}=require('express');
const {Pool} = require('pg');
// Database connection
const clientDb = new Pool({
    host:"localhost",
    port:5432,
    user:"postgres",
    password:"2000",
    database:"newusers"
});

clientDb.connect((err)=>{
    if(err){
        console.log('connection error', err.stack);
    }
    else{
        console.log('postgresSQL DataBase connected');
    }
})

const getin = "SELECT * FROM inputs";
const checkEmail = "SELECT s FROM inputs s WHERE s.email = $1";
const addToDb = "INSERT INTO inputs (username, email, place, job, phoneNo) VALUES ($1,$2,$3,$4,$5)";


module.exports = {clientDb, addToDb, checkEmail, getin};