"use client";

import ProTableTemplates from "@/components/templates/ProTableTemplates";
import ModalTemplates from "@/components/templates/ModalTemplates";
import DrawerTemplates from "@/components/templates/DrawerTemplates";

export default function Home() {
  return (
    <main className="main-container">
      <div className="flex flex-col gap-6 @[800px]:hidden">
        <ProTableTemplates />
        <ModalTemplates />
        <DrawerTemplates />
      </div>
      <div className="hidden @[800px]:block">
        <div className="columns-2 gap-6">
          <div className="break-inside-avoid mb-6">
            <ProTableTemplates />
          </div>
          <div className="break-inside-avoid mb-6">
            <ModalTemplates />
          </div>
          <div className="break-inside-avoid mb-6">
            <DrawerTemplates />
          </div>
        </div>
      </div>
    </main>
  );
}
