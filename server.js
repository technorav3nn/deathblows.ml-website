const express = require('express');
const path = require('path')

const app = express();
const { PORT = 3000 } = process.env

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', {  
        root: path.join(__dirname, '/public'),
    });  
})
app.get('/landing', (req, res) => {
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
