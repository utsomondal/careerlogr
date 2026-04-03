require("dotenv").config();
const authRoutes = require("./routes/auth");
const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");

const app = express();
app.use(express.json());

// MongoDB connection
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@learning-cluster.4pttlh7.mongodb.net/?appName=learning-cluster`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function startServer() {
  try {
    await client.connect();
    console.log("MongoDB Connected");

    // Store db so all routes can use it
    const db = client.db("hiretrack");
    app.locals.db = db;

    // Routes
    app.use("/auth", authRoutes);

    app.get("/", (req, res) => {
      res.json({ message: "HireTrack API is running" });
    });

    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  } catch (err) {
    console.log("Connection failed ❌", err);
  }
}

startServer();
