import dotenv from 'dotenv';
dotenv.config();

import express, {Express} from 'express';
import cors from 'cors'
import {createProxyMiddleware} from 'http-proxy-middleware';

//import route
import {imageRoute} from "./routes/image";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use('/api/image', imageRoute);

app.use('/api/proxy/*', createProxyMiddleware({
    target: process.env.FB,
    changeOrigin: true,
    pathRewrite: {'^/api/proxy': ''}
}));

app.listen(process.env.PORT || 8800, () => console.log('Server is running'));
