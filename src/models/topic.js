import mongoose, { Schema } from "mongoose";



const topicSchema = new Schema(
  {
    title: String,
    description: String,
    image: String,
    postedBy: {
      type: String,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
