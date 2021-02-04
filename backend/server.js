import express from "express";
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import data from './data';


mongoose.connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const app = express();
app.use(bodyParser.json());


app.get("/api/products", (req,res) => {
    res.send(data.products);
});

app.listen(config.PORT, console.log(`Server hosted at port ${config.PORT}`));