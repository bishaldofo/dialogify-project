import { NextResponse } from "next/server";
import Topic from "../../../../../models/topic";
import connectmongoDB from "../../../../../libs/mongodb";




 export async function GET(request, {params}) {
    const {id} = params;
    await connectmongoDB();
    const topic = await Topic.findOne({_id: id});
    return NextResponse.json({ topic }, { status: 200 });
 }