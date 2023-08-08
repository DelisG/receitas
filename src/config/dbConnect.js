import mongoose from "mongoose";

mongoose.connect(
  // "SUA CLUSTER DO MONGO DB"
);

let db = mongoose.connection;

export default db;
