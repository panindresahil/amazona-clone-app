import express from "express";
import config from './config';
import mongoose from 'mongoose';

const app = express();

mongoose.connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.listen(config.PORT, console.log(`Server hosted at port ${config.PORT}`));