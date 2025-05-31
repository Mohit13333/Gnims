import { model, Schema } from "mongoose";

const emailSchema = new Schema(
  {
    email: String,
    subscribeAt: { type: Date, default: Date.now },
  },
  {
    timeStamp: true,
  }
);

const Emails = new model("Emails", emailSchema);

export default Emails;
