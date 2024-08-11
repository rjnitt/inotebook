const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://engineerbaba049:engineerbaba049@babacluster.cl0owwl.mongodb.net/inotebook?retryWrites=true&w=majority&appName=BabaCluster&authMechanism=SCRAM-SHA-1&tls=true";

const connectToMongo = async () => {
  try {
    // mongoose.set('strictQuery', false)
    mongoose.connect(mongoURI);
    console.log("Mongo connected");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectToMongo;
