"use client";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Nav from "@/components/Dashboard/Nav";
import LayoutsDashboard from "@/components/LayoutsDashboard";
import Recap from "@/components/Dashboard/Recap";

export default function Dashboard() {
  // State untuk menyimpan data pengguna
  const [userData, setUserData] = useState<{
    name?: string | null;
    email?: string | null;
    id?: string | null;
  } | null>(null);

  useEffect(() => {
    async function fetchData() {
      const session = await getSession();
      if (session?.user) {
        setUserData(session.user);
      }
    }
    fetchData();
  }, []);

  return (
    <LayoutsDashboard>
      <Nav title="Dashboard" />
      <div className="p-10 bg-gray-100">
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full py-5 px-3 rounded-lg">
          <h1 className="text-4xl text-white font-bold">
            Hello {userData?.name},
          </h1>
          <p className="text-white">Semangat jadi juara</p>
        </div>

        <Recap />
      </div>
    </LayoutsDashboard>
  );
}
