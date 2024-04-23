import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/db";
import Navbar from "@/components/navbar";
export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await db.query.store.findFirst({
    where: (store, { eq }) => (
      eq(store.id, params.storeId), eq(store.userId, userId)
    ),
  });

  if (!store) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
