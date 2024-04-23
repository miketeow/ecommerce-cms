"use client";
import React, { useEffect, useState } from "react";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Button } from "@/components/ui/button";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      You have not created a store yet
      <Button
        onClick={() => {
          onOpen();
        }}
      >
        Create Store
      </Button>
    </div>
  );
};

export default SetupPage;
