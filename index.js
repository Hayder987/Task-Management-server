require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const port = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());

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
    await client.connect(); 
    const taskDb = client.db("Task-Management");
    const taskCollection = taskDb.collection("taskCollection");

    // POST API
    app.post("/task", async (req, res) => {
      try {
        const email = req.query.email;
        if (!email) {
          return res.status(401).send({ status: "You Need Login First" });
        }
        const task = req.body;
        const result = await taskCollection.insertOne(task);
        res.send(result);
      } catch (err) {
        res.status(500).send({ message: "Error adding task", error: err.message });
      }
    });

    // GET API
    app.get("/task/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const result = await taskCollection.find(query).toArray();
      res.send(result);
    });

    // PATCH API (Update Task)
    app.patch("/task/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const { status } = req.body;

        if (!ObjectId.isValid(id)) {
          return res.status(400).send({ message: "Invalid task ID" });
        }

        const filter = { _id: new ObjectId(id) };
        const updateDoc = { $set: { status } };
        const result = await taskCollection.updateOne(filter, updateDoc);

        if (result.modifiedCount === 0) {
          return res.status(404).send({ message: "Task not found or no change" });
        }

        res.send(result);
      } catch (err) {
        res.status(500).send({ message: "Error updating task", error: err.message });
      }
    });

    

  } finally {
    console.log("MongoDB running");
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Task Management Server Running");
});

app.listen(port, () => {
  console.log(`server Running At : ${port}`);
});
