require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const port = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.bixye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const taskDb = client.db("Task-Management");
    const taskCollection = taskDb.collection("taskCollection");

    //    set task database
    app.post("/task", async (req, res) => {
      try {
        const email = query.email;
        if (!email) {
          return res.send({ status: "You Need Login First" });
        }
        const task = req.body;
        const result = await taskCollection.insertOne(task);
        res.send(result);
      } catch (err) {
        console.log(err);
      }
    });


    
  } finally {
    console.log("mongodb running");
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Task Management Server Running");
});

app.listen(port, () => {
  console.log(`server Running At : ${port}`);
});
