import { MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI as string;
console.log(uri);
const client = new MongoClient(uri);
export async function runMongoDb() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    return client;
  } catch (error) {
    console.log(error);
  }
}
