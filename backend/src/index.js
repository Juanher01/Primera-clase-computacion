import express from 'express';
import morgan from 'morgan'


const app = express();

app.use(morgan('dev'))

app.listen(4500)
console.log('SERVIDOR CORRIENDO', 4500);