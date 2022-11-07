import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js"

const app = express();

// Middlewares
app.use(bodyParser.json({ extented: true, limit: "30mb" }));
app.use(bodyParser.urlencoded({ extented: true, limit: "30mb" }));

dotenv.config();

//Mongo DB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(process.env.PORT, () => console.log("listening")))
  .catch((err) => console.log(err));

//   Route Use
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
