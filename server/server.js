import express from "express";
import "dotenv/config";
import router from "./routes/email.js";
import connectDB from "./config/connectDB.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello word");
});
app.use(
  cors(["http://127.0.0.1:5501/index.html", "https://gnims-iota.vercel.app"])
);
app.use("/api", router);

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("database connection failed", err);
  });
