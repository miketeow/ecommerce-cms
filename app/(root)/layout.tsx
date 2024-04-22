import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/db";
export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await db.query.store.findFirst({
    where: (store, { eq }) => eq(store.userId, userId),
  });

  if (store) {
    redirect(`/${store.id}`);
  }
  return <>{children}</>;
}
