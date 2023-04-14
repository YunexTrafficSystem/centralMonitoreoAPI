import mongoose from "npm:mongoose";

mongoose.connect("mongodb://localhost/lightsdb")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err: Error) => {
    console.log(`DB: Error ${err.message}`);
  });
