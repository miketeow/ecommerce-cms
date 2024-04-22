"use client";
import React, { useEffect } from "react";
// import { useStoreModal } from "@/hooks/use-store-modal";
import { CreateStoreModal } from "@/components/modals/create-store-modal";

const SetupPage = () => {
  //   const onOpen = useStoreModal((state) => state.onOpen);
  //   const isOpen = useStoreModal((state) => state.isOpen);

  //   useEffect(() => {
  //     if (!isOpen) {
  //       onOpen();
  //     }
  //   }, [isOpen, onOpen]);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      You have not created a store yet
      <CreateStoreModal />
    </div>
  );
};

export default SetupPage;
