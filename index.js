const express = require('express');
const app = express();

// const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello Sreekanth!');
});

app.get('/google', function(req, res) {
    res.sendFile('google_login.html', {root: __dirname })
});
  
app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
);