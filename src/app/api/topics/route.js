import { NextResponse } from "next/server";
import connectmongoDB from "../../../../libs/mongodb";
import Topic from "../../../../models/topic";


export async function POST(request) {
    const { title,  description, image } = await request.json();
    await connectmongoDB();
    await Topic.create({title, description, image});
    return NextResponse.json({message: "Topic Created"}, {status:201} );
}

export async function GET() {
    await connectmongoDB();
    const topics = await Topic.find();
    return NextResponse.json({ topics });
 }

 export async function DELETE(request) {
    const id = request.nextUrl.searchparams.get("id");
    await connectmongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 } );
 }