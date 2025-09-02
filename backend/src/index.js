import express from 'express';
import morgan from 'morgan'
import { connectDB } from './db.js';

import authRoutes from './routes/auth.routes.js'


const app = express();
app.use(morgan('dev'))
connectDB()
app.use(authRoutes)

app.listen(4500)
console.log('SERVIDOR CORRIENDO', 4500);