import { UserButton } from "@clerk/nextjs";
import React from "react";
import StoreSwitcher from "./store-switcher";
import MainNav from "./main-nav";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/db";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await db.query.store.findMany({
    where: (store, { eq }) => eq(store.userId, userId),
  });
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 gap-4">
        <StoreSwitcher items={stores} />
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
