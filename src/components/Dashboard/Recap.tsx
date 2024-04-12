import { useEffect, useState } from "react";
import { FaPeopleRoof } from "react-icons/fa6";

export default async function Recap() {
  const [futsalData, setFutsalData] = useState([]);
  const [vocalData, setcVocalData] = useState([]);
  const [puisiData, setPuisiData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/lomba");
        if (response.ok) {
          const data = await response.json();
          setFutsalData(data.futsal);
          setcVocalData(data.vocal);
          setPuisiData(data.puisi);
        } else {
          console.error("Failed to fetch futsal data");
        }
      } catch (error) {
        console.error("Failed to fetch futsal data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="mt-10">
      <h1 className="text-xl font-bold">Rekapitulasi Pendaftaran Pekat 2024</h1>
      <div className="grid lg:grid-cols-3 mt-2">
        <div className="shadow-xl p-4 lg:w-52 rounded-lg flex items-center justify-center gap-6 hover:bg-primary transition-all ease-out cursor-pointer  group">
          <FaPeopleRoof
            size={40}
            className="text-gray-500 group-hover:text-white"
          />
          <div>
            <p className="text-lg font-bold text-primary group-hover:text-white">
              Futsal
            </p>
            <small className="group-hover:text-gray-300">
              total tim terdaftar
            </small>
            <h2 className="text-2xl font-bold mt-2 group-hover:text-white">
              {futsalData.length}/{" "}
              <span className="group-hover:text-green-400">14</span>
            </h2>
          </div>
        </div>
        <div className="shadow-xl p-3 lg:w-52 rounded-lg flex items-center justify-center gap-3 hover:bg-green-500 transition-all ease-out cursor-pointer hover:text-white group my-4 lg:my-0">
          <FaPeopleRoof
            size={40}
            className="text-gray-500 group-hover:text-white"
          />
          <div>
            <p className="text-lg font-bold text-primary group-hover:text-white">
              Vocal Solo
            </p>
            <small className="group-hover:text-gray-300">
              total orang terdaftar
            </small>
            <h2 className="text-2xl font-bold mt-2 group-hover:text-white">
              {vocalData.length}/{" "}
              <span className="group-hover:text-white">15</span>
            </h2>
          </div>
        </div>
        <div className="shadow-xl p-3 lg:w-52 rounded-lg flex items-center justify-center gap-3 hover:bg-violet-500 transition-all ease-out cursor-pointer hover:text-white group">
          <FaPeopleRoof
            size={40}
            className="text-gray-500 group-hover:text-white"
          />
          <div>
            <p className="text-lg font-bold text-primary group-hover:text-white">
              Puisi
            </p>
            <small className="group-hover:text-gray-300">
              total orang terdaftar
            </small>
            <h2 className="text-2xl font-bold mt-2 group-hover:text-white">
              {puisiData.length}/
              <span className="group-hover:text-green-400">15</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
