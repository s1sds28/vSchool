mongodb.com/products/compass

# install mongoDB Compass

Follow install instructions from https://www.mongodb.com/docs/compass/current/install/

# Download MongoDB compass from home terminal
wget https://downloads.mongodb.com/compass/mongodb-compass_1.40.4_amd64.deb

# Install MongoDB Compass
sudo dpkg -i mongodb-compass_1.40.4_amd64.deb

# Start MongoDB Compass
mongodb-compass


New Connection on MongoDB Compass locally
Thier default:

mongodb://localhost:27017

What I tried:
mongodb+srv://s1sds28:vSchoolDB@cluster0.htqkfgj.mongodb.net/

--seems to be working

Under test -> movies ->