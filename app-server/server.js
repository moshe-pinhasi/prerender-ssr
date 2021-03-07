
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express()
const http = require('http').createServer(app);

// apis
const jobsApi = require('./api/jobs/jobs.routes')

app.use(cookieParser())
app.use(bodyParser.json());
app.use(session({
    secret: 'typ9OBaqrRbJOzDJrP7IzgE9',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

if (process.env.NODE_ENV !== 'production') {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080'],
        credentials: true
    };
    app.use(cors(corsOptions));
}

// api
app.use('/api/jobs', jobsApi)


// pages
app.get('/job/:id', (req, res) => {
    const {id} = req.params
    res.sendFile(path.join(__dirname, '../public', `job-${id}.html`));
})

app.get('/job', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', `job-list.html`));
})

app.use(express.static(path.resolve(__dirname, '../public/assets')));


const port = 3030;
http.listen(port, () => {
    console.log('Server is running on port: ' + port)
});

