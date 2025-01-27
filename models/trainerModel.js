const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema(
  {
    trainerName: { type: String, required: true },
    businessUnit: { type: String, required: true },
    status: { type: String, enum:['Available', 'Not Available'], required:true},
    expertise:{type:[String]},
    module: {type:[String], required:true},
    topics:{type:[String], required:true},
    noOfHours: {
      type:Number
    }
  },
  { timestamps: true }
);

const Trainer = mongoose.model("Trainer", trainerSchema);
module.exports = Trainer;
