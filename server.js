const express = require('express');

const app = express();
const { PORT = 3000 } = process.env

app.get('/', (req, res) => {
    res.send('Hello world, from Elastic Beanstalk!')
})

app.get('/test', (req, res) => {
    const name = req.query.name;
    if(!name) {
        res.send("enter a name!!!");
    }

    res.send(`Your name is ${name}! Hello!`);
})

app.listen(PORT, () => 
    console.log(`Listening to port ${PORT}`)
)
