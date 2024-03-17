import { MongoClient, ObjectId } from "mongodb";

// 等待其他组员提供MongoDB连接字符串
process.env.MONGODB_URI =
  "mongodb://<username>:<password>@<endpoint>.documents.azure.com:10255/?ssl=true";

if (!process.env.MONGODB_URI) {
  // throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  process.env.MONGODB_URI = "mongodb://localhost:27017";
}

// Connect to MongoDB
async function connectToDB() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  // 替换成对应数据库
  const db = client.db("bookingsDB");
  db.client = client;
  return db;
}

export default { connectToDB, ObjectId };
