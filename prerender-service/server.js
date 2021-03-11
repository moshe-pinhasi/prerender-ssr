const express = require('express')
const cors = require('cors')

const app = express()
const http = require('http').createServer(app);

app.set("view engine","ejs")

// apis
const jobsApi = require('./api/jobs/jobs.routes')

if (process.env.NODE_ENV !== 'production') {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080'],
        credentials: true
    };
    app.use(cors(corsOptions));
}

// api
app.use('/api/admin/jobs', jobsApi)

const port = 3031;
http.listen(port, () => {
    console.log('Server is running on port: ' + port)
});

