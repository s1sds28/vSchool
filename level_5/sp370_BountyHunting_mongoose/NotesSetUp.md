sp370_BountyHunting_mongoose

# npm init -y
* update package.json -> index.js to server.js

# npm install express

# npm install morgan

# In the backend npm install mongoose@6.11

# npm audit fix --force
*npm audit fix --force

# go to
* https://cloud.mongodb.com/v2/6552dbeda6291315186a92c1#/overview

* https://cloud.mongodb.com/v2#/org/6550484a7231fb73fe57dbe9/projects

* projects -> new project -> 
* Project name: BountyHunter
* Create a deployment -> create -> M0, aws, N.Virginas (us-east-1), cluster0
* username: s1sds28
* password: vSchoolDB
* Add my current IP Address
* Database Deployments -> MongoDB for VS Code -> mongodb+srv://s1sds28:<password>@cluster0.1u5iih2.mongodb.net/


# touch server.js
* update server.js ->//imports//middleware//DB connection//routes//Error handler //Server listen

# mkdir models

# touch models/Bounty.js
* update Bounty.js

# mkdir routes

# touch routes/bountyRouter.js
* update bountyRouter.js












// Back-end complete check with Postman
// run app with: nodemon server.js

# mkdir client

# cd client

# npx create-react-app . 

# npm start
* just to check

sp355_getRequest/client/src
-delete all of their front end
-create index.js
-update index.js

client/package.json
- add proxy -> ...},   "proxy": "http://localhost:9000"
local
// axios.get("movies")
// third party api
// axios.get("http://example.com")

# add src/App.jsx

# in Client: npm install axios

# mkdir src/components


To run app: 
# client
npm start

# sp355_GetRequest
nodemon server.js

