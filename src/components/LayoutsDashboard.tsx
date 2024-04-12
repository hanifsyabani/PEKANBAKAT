'use client'

import Sidebar from "@/components/Dashboard/Sidebar";
import React, { useState } from "react";
import Copyright from "@/components/Dashboard/Copyright";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {

  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="lg:flex">
        <Sidebar open={open} setOpen={setOpen}/>
        <main className={`w-full  ${open ? "lg:ml-[5%]" : "lg:ml-[19%]"} transition-all`} >{children}</main>
      </div>
      <Copyright open={open} />
    </React.Fragment>
  );
}
