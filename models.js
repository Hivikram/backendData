// const mongoose = require("mongoose");
const mongoose = require("mongoose");
const userschema = {
  name: {
    type: String,
    require: [true],
  },
  age: {
    type: Number,
    require: true,
  },
};
const mobialSchema = {
  name: {
    type: String,
    require: [true, "length must be 100"],
  },
  price: {
    type: Number,
  },
  rating: {
    type: Number,
    require: [true],
  },
  stockquentity: {
    type: Number,
    require: [true, "atlest the number is 0"],

    message: "can't be negative",
  },
  discount: {
    type: Number,
  },
  totalprice: {
    type: Number,
  },
};
const schema = mongoose.Schema(userschema);
const usermodel = mongoose.model("tablename", schema);

const mobSchema = mongoose.Schema(mobialSchema);
const mobModel = mongoose.model("tablename2", mobSchema);

console.log(usermodel, "oo");
module.exports = { usermodel, mobModel };
