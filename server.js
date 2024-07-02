import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";

// * ---------------------------Routers-----------------------------

import JobRouters from "./routers/JobRouters.js";
import router from "./routers/authRouter.js";
import userRouter from "./routers/userRouter.js";

// * ---------------------------public-----------------------------

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

// * --------------General middleware for set up-------------------
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authmiddleware.js";

// * -----------Dynamic storing of multimedia-------------------------

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === "develop") {
  app.use(morgan("dev"));
}

app.use(express.static(path.resolve(__dirname, "./public")));
app.use(cookieParser());
app.use(express.json());

// * -----------------------------------------------------------

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});

// * -----------------Building-Blocks---------------------------------

app.use("/api/v1/jobs", authenticateUser, JobRouters);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/auth", router);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

// * -----------------------------------------------------------

const port = process.env.PORT || 3000;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
