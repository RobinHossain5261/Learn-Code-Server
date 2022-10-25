const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors());

const port = process.env.port || 5000;

app.get('/', (req, res) => {
    res.send('Now server is running')
})


app.listen(port, () => {
    console.log('server is running', port);
})