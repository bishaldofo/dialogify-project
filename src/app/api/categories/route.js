import { NextResponse } from "next/server";
import { connectToDB } from "@/mongodb";
import Category from "@/models/Category";

export const GET = async (request) => {
   try {
      await connectToDB()
      const categories = await Category.find()
      return new NextResponse(JSON.stringify(categories), {status: 200})
   } catch(error) {
      return new NextResponse("Error is fetching Categories" + error, {status: 500})
   }
}