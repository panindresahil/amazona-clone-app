import express from "express";
import config from './config';
import productRoute from './routes/productRoute';

const app = express();

app.use('/api/products', productRoute);


app.listen(config.PORT, () => {
    console.log(`Server hosted at port http://localhost:${config.PORT}`)
});