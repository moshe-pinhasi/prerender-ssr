# How to run

#### Run the server + mongodb
```
> docker-compose up
```

#### Run the vue app
```
> cd client
client> npm run serve
```

#### Each change in vue app you need to do:
- In the client directory run the command: ```npm run build```
- Open the vue-app directory and copy from the index.html file the scripts and the links to jobList.ejs and jobDetails.ejs 
- Open the browser on '/admin'
- Click on the "Generate Static" btn
- On your browser go to localhost:3030/job or click [here](http://localhost:3030/job/)
