import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "@/db";
import { store } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function PATCH(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();

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

    if (!params.storeId) {
      return new NextResponse("Store id is required", {
        status: 400,
      });
    }

    const updatedStore = await db
      .update(store)
      .set({
        name,
      })
      .where(eq(store.userId, userId) && eq(store.id, params.storeId))
      .returning();

    return NextResponse.json(updatedStore);
  } catch (error) {
    console.log("[STORE_PATCH]", error);
    return new NextResponse("Internal server error", {
      status: 500,
    });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }
    if (!params.storeId) {
      return new NextResponse("Store id is required", {
        status: 400,
      });
    }

    const deletedStore = await db
      .delete(store)
      .where(eq(store.userId, userId) && eq(store.id, params.storeId))
      .returning();

    return NextResponse.json(deletedStore);
  } catch (error) {
    console.log("[STORE_PATCH]", error);
    return new NextResponse("Internal server error", {
      status: 500,
    });
  }
}
