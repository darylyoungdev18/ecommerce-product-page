import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const options = {}
let client;
let clientPromise: Promise<MongoClient>;

 //included _mongoClientPromise to prevent multiple connections causing issues due to reloads in development mode
declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to maintain the MongoDB client
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
}
else {
  // In production mode, create a new MongoDB client for each request
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}
export default clientPromise;