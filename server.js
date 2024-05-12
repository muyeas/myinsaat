require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const userRoutes = require("./routes/users");
const projectRoutes = require("./routes/projects");
const changeTextRoutes = require("./routes/changeText");
const imageRoutes = require("./routes/images")
const errorHandler = require("./middlewares/error");

const admin = require("firebase-admin");

const serviceAccount = require("./ServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
   storageBucket: "gs://myinsaatresimler.appspot.com"
});


// Connect to DB
connectDB();

// Express App
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/project", projectRoutes);
app.use("/api/changeText",changeTextRoutes);
app.use("/api/image",imageRoutes);

app.use("/", (req, res) => {
  return res.json({
    message: "Welcome to the Node.js REST API using ExpressJS and MongoDB"
  });
});

app.use(errorHandler);

const server = app.listen(port, () =>
  console.log(`Server started listening on ${port}`)
);

process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error: ${error}`);
  server.close(() => process.exit(1));
});
