import mongoose, { Schema } from "mongoose";

const { ObjectId } = mongoose.Schema;

const topicSchema = new Schema(
    {
        title: String,
        description: String,
        image: String,
        user: { type: Schema.Types.ObjectId, ref: "User" },
    },
    {
        timestamps: true,
    }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;