const express = require('express');
const app = express();
const path = require('path');
const port = 80;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/LOADER/index.html"));
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})