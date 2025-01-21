import { connection } from "@/dbConfig/dbconfig";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { Blog } from "@/modal/blog";


export async function GET() {
    await mongoose.connect(connection);
    const data = await Blog.find();
    return NextResponse.json({ result: data,success:true }, { status: 200 });
  }