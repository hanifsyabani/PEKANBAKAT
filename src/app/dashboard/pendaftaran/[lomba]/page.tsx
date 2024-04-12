"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import LayoutsDashboard from "@/components/LayoutsDashboard";
import Nav from "@/components/Dashboard/Nav";
import BackButton from "@/components/Dashboard/BackButton";
import { Spinner, useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [values, setValues] = useState({
    nama: "",
    nisn: "",
    kelas: "",
    jenisLomba: "",
    ttl: "",
    judulKarya: "",
    namaTim: "",
    anggota: "",
    setuju: false,
  });
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  function handleInput(
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    const inputValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setValues((old) => ({ ...old, [name]: inputValue }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/lomba", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        toast({
          title: "Pendaftaran Berhasil",
          description: "Pendaftaran Lomba Futsal Berhasil",
          status: "success",
          duration: 9000,
          isClosable: true,
        });

        router.push("/dashboard");
      } else {
        const data = await res.json();
        toast({
          title: "Pendaftaran Gagal",
          description: data.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Pendaftaran Gagal",
        description: "Pendaftaran Lomba Futsal Gagal",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    setLoading(false);
    setValues({
      nama: "",
      nisn: "",
      kelas: "",
      jenisLomba: "",
      ttl: "",
      judulKarya: "",
      namaTim: "",
      anggota: "",
      setuju: false,
    });
  }

  return (
    <LayoutsDashboard>
      <div>
        <Nav title="Pendaftaran Lomba" />
        <BackButton />
        <form className="p-3" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="jenisLomba"
              className="block text-sm font-semibold text-gray-400"
            >
              Jenis Lomba
            </label>
            <select
              name="jenisLomba"
              id="jenisLomba"
              onChange={handleInput}
              className="w-full py-3 px-4 mt-2 border border-gray-300"
            >
              <option hidden>Pilih Jenis Lomba</option>
              <option value="Vocal Solo">Vocal Solo</option>
              <option value="Cipta Puisi">Cipta Puisi</option>
              <option value="Futsal">Futsal</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="nama"
              className="block text-sm font-semibold text-gray-400"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              className="w-full mx-auto py-2 px-3 mt-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:border-2 focus:outline-none "
              name="nama"
              id="nama"
              placeholder="Masukkan Nama Lengkap"
              required
              onChange={handleInput}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="nisn"
              className="block text-sm font-semibold text-gray-400"
            >
              NISN
            </label>
            <input
              type="text"
              className="w-full mx-auto py-2 px-3 mt-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:border-2 focus:outline-none "
              name="nisn"
              id="nisn"
              placeholder="Masukkan No Induk Siswa Nasional"
              required
              onChange={handleInput}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="kelas"
              className="block text-sm font-semibold text-gray-400"
            >
              Tingkat Kelas
            </label>
            <select
              name="kelas"
              id="kelas"
              onChange={handleInput}
              className="w-full py-3 px-4 mt-2 border border-gray-300"
            >
              <option hidden>Pilih Tingkat Kelas</option>
              <option value="X">X</option>
              <option value="XI">XI</option>
              <option value="XII">XII</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="ttl"
              className="block text-sm font-semibold text-gray-400"
            >
              Tanggal Lahir
            </label>
            <input
              type="date"
              className="w-full mx-auto py-2 px-3 mt-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:border-2 focus:outline-none "
              name="ttl"
              id="ttl"
              required
              onChange={handleInput}
            />
          </div>
          {values.jenisLomba === "Cipta Puisi" && (
            <div className="mb-4">
              <label
                htmlFor="judulKarya"
                className="block text-sm font-semibold text-gray-400"
              >
                Judul Karya
              </label>
              <input
                type="text"
                className="w-full mx-auto py-2 px-3 mt-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:border-2 focus:outline-none "
                name="judulKarya"
                id="judulKarya"
                required
                onChange={handleInput}
              />
            </div>
          )}

          {values.jenisLomba === "Futsal" && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="namaTim"
                  className="block text-sm font-semibold text-gray-400"
                >
                  Nama Tim
                </label>
                <input
                  type="text"
                  className="w-full mx-auto py-2 px-3 mt-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:border-2 focus:outline-none "
                  name="namaTim"
                  id="namaTim"
                  required
                  onChange={handleInput}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="futsal"
                  className="block text-sm font-semibold text-gray-400"
                >
                  Anggota Tim
                </label>
                <textarea
                  className="w-full mx-auto py-2 px-3 mt-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:border-2 focus:outline-none "
                  name="anggota"
                  id="anggota"
                  required
                  onChange={handleInput}
                />
                <p>Contoh: Nama1, Nama2.</p>
              </div>
            </>
          )}
          <div className="flex gap-3">
            <input
              type="checkbox"
              name="setuju"
              id="setuju"
              required
              checked={values.setuju}
              onChange={handleInput}
            />
            <label htmlFor="setuju" className="text-sm font-semibold">
              Saya menyutujui syarat dan ketentuan yang berlaku. Apabila
              terdapat data yang tidak benar, saya akan siap menanggung
              pembatalan lomba.
            </label>
          </div>

          <div className="text-center mt-10">
            <button
              className={`${
                loading || !values.setuju ? "bg-gray-400" : "bg-primary"
              } text-white py-3 w-full font-bold rounded-full hover:bg-blue-950`}
              type="submit"
              disabled={loading || !values.setuju}
            >
              {loading ? <Spinner /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </LayoutsDashboard>
  );
}
