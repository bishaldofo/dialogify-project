import { NextResponse } from "next/server";

import { connectToDB } from "@/mongodb";
import Topic from "@/models/topic";


// export async function POST(request) {
//     const { title,  description, image } = await request.json();
//     await connectToDB();
//     await Topic.create({title, description, image });
//     return NextResponse.json({message: "Topic Created"}, {status:201} );
// }

export async function POST(request) {
    const { title, description, image } = await request.json();
    await connectToDB();
    await Topic.create({title, description, image});
    return NextResponse.json({message: "Topic Created"}, {status:201} );
}

// export const createPost = async (req, res) => {
//     // console.log("Post=>", req.body);
//     const { content, image } = req.body;
//     if (!content.length) {
//       return res.json({
//         error: "content is required",
//       });
//     }
  
//     try {
//       const post = new Post({ content, image, postedBy: req.auth._id });
//       post.save();
//       res.json(post);
//     } catch (error) {
//       console.log("Error while creating post server => ", error);
//       res.sendStatus(400);
//     }
//   };

export async function GET() {
    await connectToDB();
    const topics = await Topic.find();
    return NextResponse.json({ topics });
 }

 export async function DELETE(request) {
    const id = request.nextUrl.searchparams.get("id");
    await connectToDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 } );
 }