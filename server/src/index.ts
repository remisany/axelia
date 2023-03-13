import express, {Express} from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const mongoUrl = process.env.MONGO_URL as string

mongoose.connect(mongoUrl)
    .then(() => console.log('Connection successful'))
    .catch((err: Error) => console.log(err));

const app: Express = express();

app.use(express.json())

app.listen(8080, () => console.log('Server is running'));
