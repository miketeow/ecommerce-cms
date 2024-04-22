import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { store } from "@/db/schema";
export async function POST(request: Request) {
  try {
    const { userId } = auth();
    const body = await request.json();
    const { name } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }

    if (!name) {
      return new NextResponse("Name is required", {
        status: 400,
      });
    }

    const newStore = await db
      .insert(store)
      .values({ name, userId })
      .returning();

    return NextResponse.json(newStore);
  } catch (error) {
    console.log("[STORES_POST]", error);
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}
