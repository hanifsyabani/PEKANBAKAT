import React from "react";
import { FcAcceptDatabase } from "react-icons/fc";

export default function Terms() {
  const syarat = [
    {
      id: 1,
      category: "Sekolah",
      syarat: [
        "Sekolah berada di Kabupaten Musi Banyuasin",
        "Sekolah sudah terdaftar di Pendaftaran Online",
        "Sekolah mempunyai jenjang pendidikan SD, SMP, SMA, dan perguruan tinggi",
        "Sekolah memiliki minimal 10 siswa",
      ],
    },
    {
      id: 2,
      category: "Siswa",
      syarat: [
        "Siswa berdomisili di Kabupaten Musi Banyuasin",
        "Siswa hanya boleh mendaftar di 1 cabang",
        "Siswa harus memiliki akun Pendaftaran Online",
        "Setiap pendaftaran akan dicek satu persatu data yang diinputkan",
      ],
    },
  ];

  return (
    <div className="lg:flex justify-center gap-6 mt-8">
      <div>
        {syarat.map((item) => {
          if (item.id === 1) {
            return (
              <>
                <div className="bg-primary w-1/2 py-3 rounded-full flex items-center justify-center">
                  <h1 className="text-xl text-white font-bold">{item.category}</h1>
                </div>
                <ul className="mt-4">
                  {item.syarat.map((syarat) => (
                    <div className="flex items-center gap-3">
                      <FcAcceptDatabase size={25} />
                      <li className="mb-4 text-lg">{syarat}</li>
                    </div>
                  ))}
                </ul>
              </>
            );
          }
        })}
      </div>
      <div className="mt-7 lg:mt-0">
        {syarat.map((item) => {
          if (item.id === 2) {
            return (
              <>
                <div className="bg-secondary w-1/2 py-3 rounded-full flex items-center justify-center">
                  <h1 className="text-xl text-white font-bold">{item.category}</h1>
                </div>
                <ul className="mt-4">
                  {item.syarat.map((syarat) => (
                    <div className="flex items-center gap-3">
                      <FcAcceptDatabase size={25} />
                      <li className="mb-4 text-lg">{syarat}</li>
                    </div>
                  ))}
                </ul>
              </>
            );
          }
        })}
      </div>
    </div>
  );
}
