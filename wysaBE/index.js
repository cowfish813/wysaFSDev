import express from 'express';
import mongoose from 'mongoose';
import { MONGO_URI } from './config/keys';
import { onBoarding } from './routes/onBoarding';
import cors from 'cors';

const app = express();
app.use(cors( ));

app.use(express.json());

mongoose   
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('success'))
        .catch(err => console.log(err));

app.use('api/onboarding', onBoarding);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('live server'));
//npm run start:dev
