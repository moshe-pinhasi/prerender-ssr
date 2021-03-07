# How to run

#### Run the api-server + mongodb
```
cd app-server
app-server> docker-compose up
```

#### Run the prerender-service
```
cd prerender-service
prerender-service> npm run server:dev
```

#### Build the client
```
cd client
cline> npm run build
```

#### Generate the static files
```
POST http://localhost:3031/api/admin/jobs/generate-job-site
```

On your browser go to localhost:3030/job or click [here](http://localhost:3030/job/)

#### Each change in vue app you need to do:
- In the client directory run the command: ```npm run build```
- Open the vue-app directory and copy from the index.html file the scripts and the links to jobList.ejs and jobDetails.ejs 
- call to generate the static files api
- On your browser go to localhost:3030/job or click [here](http://localhost:3030/job/)
