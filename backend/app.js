/*const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRoutes);

// Trasa domyślna
app.get('/', (req, res) => {
    res.render("papa");
    //res.sendFile(__dirname + '/public/index.html'); // Zakładając, że masz plik index.html w folderze public
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


 */

// backend/app.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRoutes);

// Trasa domyślna
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html')); // Zakładając, że masz plik login.html w folderze public
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});