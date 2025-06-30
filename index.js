import express from 'express';
const app = express();
import Routes from './src/Routes/library.routes.js'
const port = 3000
import connectDb from './src/ConnectionDb/connectDb.js'


console.log(connectDb());
app.use("/api", Routes)

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
