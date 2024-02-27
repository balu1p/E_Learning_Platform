import express from 'express';
import dotenv from 'dotenv';
import connectDb from './DB/db.js';

dotenv.config()

const app = express();

connectDb()
const port = process.env.PORT || 7070;


app.use(express.json({limit: "20kb"}));
app.use(express.urlencoded({extended: true, limit: "20kb"}));

app.listen(port,()=>{
    console.log(`app listening on ${port}`);
})

