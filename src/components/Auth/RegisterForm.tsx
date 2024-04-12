"use client";

import { Spinner, useToast } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import logo from "@/assets/LogoKmmuba.png";
import logoRegis from "@/assets/register.png";
import pekat from "@/assets/logo.png";

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({});
  const toast = useToast();
  const router = useRouter();

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues((old) => ({ ...old, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        toast({
          title: "Register Success",
          description: "We've created your account for you.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        router.push("/login");
      } else {
        const data = await res.json();
        toast({
          title: "Error register",
          description: data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
      setIsLoading(false);
      setValues({});
    } catch (error) {
      toast({
        title: "error register",
        description: "We've created your account for you.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  return (
    <div className="w-full bg-[#A2CED1] h-screen lg:flex relative">
      <div className="lg:w-1/2 p-10">
        <div className="flex items-center gap-4">
          <Image
            src={logo}
            alt="logo"
            width={500}
            height={500}
            className="w-20"
            loading="lazy"
          />
          <Image
            src={pekat}
            alt="logo"
            width={500}
            height={500}
            className="w-20 "
            loading="lazy"
          />
        </div>
        <h1 className="text-xl font-semibold text-white">
          Temukan pengalaman berharga disini
        </h1>
        <Image
          src={logoRegis}
          alt="logo"
          width={500}
          height={500}
          className="w-[27rem] object-cover absolute top-52 left-4 hidden lg:block"
        />
      </div>
      <div className="bg-white w-full rounded-tl-[7rem] rounded-bl-[7rem] p-5">
        <div className="text-center">
          <h1 className="text-xl font-bold">
            Buat Akun untuk <span className="text-primary">Pekan Bakat</span>
          </h1>
          <p>
            Sudah punya akun?{" "}
            <Link href={"/login"} className="text-blue-500 font-semibold">
              Login
            </Link>{" "}
          </p>
        </div>
        <div className="lg:px-20 mt-7">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-semibold text-gray-400"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full mx-auto py-2 px-3 mt-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:border-2 focus:outline-none "
                name="username"
                id="username"
                placeholder="Masukkan Username"
                onChange={handleInput}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full mx-auto py-2 px-3 mt-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:border-2 focus:outline-none "
                name="email"
                id="email"
                placeholder="Masukkan Email"
                onChange={handleInput}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-400"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full mx-auto py-2 px-3 mt-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:border-2 focus:outline-none "
                name="password"
                id="password"
                placeholder="Password"
                onChange={handleInput}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confpassword"
                className="block text-sm font-semibold text-gray-400"
              >
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full mx-auto py-2 px-3 mt-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:border-2 focus:outline-none "
                name="confpassword"
                id="confpassword"
                placeholder="Password"
                onChange={handleInput}
              />
            </div>
            <div className="text-center mt-10">
              <button
                className="bg-primary text-white py-3 w-full font-bold rounded-full hover:bg-blue-950"
                type="submit"
              >
                {isLoading ? <Spinner /> : "Daftar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
