import mongoose from "mongoose";
import { app } from "./app";
import { natsWrapper } from "./nats-wrapper";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be provided");
  }
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be provided");
  }

  try {
    await natsWrapper.connect(
      "ticketing",
      "uniqueid-Also-Todo",
      "http://nats-srv:4222"
    );

    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Mongodb");
  } catch (err) {
    console.log(err);
  }

  app.listen(3000, () => {
    console.log("listening on port 3000");
  });
};
start();
