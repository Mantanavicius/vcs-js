import dotenv from "dotenv";
import express from "express";
import pratimaiRoutes from "./routes/pratimai.js";
import mongoose from "mongoose";

dotenv.config();

//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/pratimai", pratimaiRoutes);


//connect to db
mongoose
.connect(process.env.URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Listening on port", process.env.PORT);
    });
})
.catch((err) => {
    console.log(err);
});
