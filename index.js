const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { usermodel, mobModel } = require("./models");

dotenv.config();
const { mongolink, portno } = process.env;
console.log(mongolink);
const { getRequest, uniqueuser, deletebyid, postdata } = require("./api.js");
mongoose
  .connect(
    "mongodb+srv://hivikram:vikrampro2@cluster0.rif0hup.mongodb.net/myapppro2"
  )
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err));
const message = "";
app.use(express.json());

const userRouter = express.Router();
const mobileRouter = express.Router("/home/mobiles");
app.use("/home/user", userRouter);
app.use("/home/mobiles", mobileRouter);

userRouter.post("/", postdata(usermodel));
userRouter.get("/", getRequest(usermodel));
userRouter.get("/:id", uniqueuser(usermodel));
userRouter.delete("/:id", deletebyid(usermodel));

mobileRouter.post("/", postdata(mobModel));
mobileRouter.get("/", getRequest(mobModel));
mobileRouter.get("/:id", uniqueuser(mobModel));
mobileRouter.delete("/:id", deletebyid(mobModel));

app.use((req, res) => {
  res.status(404).json({
    status: "failure",
    message: "not found",
  });
});
app.listen(portno, (req, res) => {
  console.log("localhost:3000");
});
// const schemapattron = {
//   name: {
//     type: String,
//     require: true,
//   },
//   age: {
//     type: Number,
//     require: true,
//   },
// };
// const userSchema = new mongoose.Schema(schemapattron);
// const usermodel = mongoose.model("TableName", userSchema);
