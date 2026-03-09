import express from 'express';
import dotenv, { config } from "dotenv"
import DATABASE from './db/dbConfig.js';
import mongoose from 'mongoose';
import userRouter from './routes/userRoute.js';

DATABASE();

dotenv.config({
    path: './src/.env'
});
// Set the engine

const app = express();
const PORT = process.env.PORT;
app.set('view engine', 'ejs');

app.use('/api', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

