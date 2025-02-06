const express = require("express");
const path = require("path");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log("App is listening on port ", port);
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// For all routes, serve index.html (Single Page Application approach)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

