const express = require('express');
const bodyParser  = require('body-parser');
require('./config');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({}));
app.get('/', (req, res) => {
    res.send('I love you');
})
app.listen(process.env.PORT, (er) => {
    if (er) console.log(`unexpected error while starting the server, ${er}`);
    else {
        console.log(`Server is up and listening on port ${process.env.PORT}`);
    }
});
