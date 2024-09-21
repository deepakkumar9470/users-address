import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
const PORT = process.env.PORT || 8000;
import cors from 'cors';
import connectDatabase from './db/db.js';
import userRoute from './routes/auth.js';


app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use(cors());

app.use('/api/user', userRoute);

connectDatabase();

app.get('/', (req,res)=>{
    res.send('hello users..')
})

app.listen(PORT, ()=>{
    console.log(`Server started at port http://localhost:${PORT}`);
});


