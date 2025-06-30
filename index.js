import express from 'express';
const app = express()
const port = 3000
import connectDb from './src/Model/ConnectionDb/connectDb.js';


console.log(connectDb());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
