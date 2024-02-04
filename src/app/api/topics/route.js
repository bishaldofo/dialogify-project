import { NextResponse } from "next/server";
import Topic from "../../../../models/topic";
import { connectToDB } from "@/mongodb";


export async function POST(request) {
    const { title,  description, image } = await request.json();
    await connectToDB();
    await Topic.create({title, description, image });
    return NextResponse.json({message: "Topic Created"}, {status:201} );
}

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