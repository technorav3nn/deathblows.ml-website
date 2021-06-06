const express = require('express');

const app = express();
const { PORT = 3000 } = process.env

app.get('/', (req, res) => {
    res.send('Hello world, from Elastic Beanstalk!')
})
app.listen(PORT, () => 
    console.log(`Listening to port ${PORT}`)
)
