const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

// middleware for POST data
app.use(express.urlencoded({ extended: true }));

// serve static files
app.use(express.static('public'));

const viewsPath = path.join(__dirname, 'views');

// HOME PAGE
app.get('/', (req, res) => {
    ejs.renderFile(path.join(viewsPath, 'home.ejs'), {}, (err, html) => {
        res.send(html);
    });
});

// SIGNUP PAGE
app.get('/signup', (req, res) => {
    ejs.renderFile(path.join(viewsPath, 'signup.ejs'), {}, (err, html) => {
        res.send(html);
    });
});

// HANDLE FORM SUBMIT
app.post('/register', (req, res) => {
    const userData = req.body;

    ejs.renderFile(
        path.join(viewsPath, 'result.ejs'),
        { user: userData },
        (err, html) => {
            res.send(html);
        }
    );
});

// 404 PAGE
app.use((req, res) => {
    res.status(404).send(`
        <h1>404 - Page Not Found</h1>
        <a href="/">Go Home</a>
    `);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
