import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/db";
import React from "react";
import SettingsForm from "@/components/settings-form";

type SettingPageProps = {
  params: {
    storeId: string;
  };
};
const SettingPage = async ({ params }: SettingPageProps) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await db.query.store.findFirst({
    where: (store, { eq }) =>
      eq(store.userId, userId) && eq(store.id, params.storeId),
  });

  if (!store) {
    redirect("/");
  }
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={store} />
      </div>
    </div>
  );
};

export default SettingPage;
