import { NextResponse } from "next/server";
import connectmongoDB from "../../../../../libs/mongodb";
import Topic from "../../../../../models/topic";



 export async function GET(request, {params}) {
    const {id} = params;
    await connectmongoDB();
    const topic = await Topic.findOne({_id: id});
    return NextResponse.json({ topic }, { status: 200 });
 }