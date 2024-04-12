'use client'

import { Spinner, useToast } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import logo from "@/assets/logo.png";
import logoLogin from "@/assets/login.jpg";

interface FormValues {
  email: string;
  password: string;
}

export default function LoginForm(){
  const [values, setValues] = useState<FormValues>({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  function handleInput (e : ChangeEvent<HTMLInputElement>){
    const {name, value} = e.target;
    setValues((old) => ({...old, [name] :value}))
  }

  async function handleSubmit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email : values.email,
        password : values.password,
      });
      
      if(res?.error){
        toast({
          title:"Error login",
          description: "Silahkan cek kembali email dan password",
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }else{
        toast({
          title:"Login Success",
          description: "Semangat jadi juara",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        router.replace('/dashboard')
      }

    } catch (error) {
      toast({
        title:"error login",
        description: "Something went wrong",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
    setIsLoading(false);
  }

  return (
    <div className="lg:flex justify-center items-center">
      <div className="lg:w-1/2 lg:px-10 px-6 mt-20 lg:mt-0">
        <Link href={'/'}>
          <Image alt="logo" src={logo}  />
        </Link>
        <h1 className="font-bold mt-6 text-2xl">Selamat Datang kembali !</h1>
        <p>Silahkan login untuk mendaftar lomba</p>
        <form action="" className="mt-10" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg text-gray-400">
              Email
            </label>
            <input
              type="email"
              className="w-full py-3 px-4 mt-2 border border-gray-300 rounded-full"
              name="email"
              id="email"
              placeholder="Masukkan Email"
              onChange={handleInput}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-lg text-gray-400 ">
              Password
            </label>
            <input
              type="password"
              className="w-full py-3 px-4 mt-2 border border-gray-300 rounded-full"
              name="password"
              id="password"
              placeholder="Masukkan Password"
              onChange={handleInput}
              required
            />
          </div>
          <div className="text-center mt-10">
            <button
              className="bg-primary text-white py-3 w-full font-bold rounded-full hover:bg-blue-950"
              type="submit"
            >
              {isLoading ? <Spinner /> : "Login"}
            </button>
            <p className="mt-4">
              Belum punya akun?{" "}
              <Link href={"/register"} className="text-primary">
                Daftar Sekarang
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="lg:w-1/2 hidden lg:block">
        <Image
          alt="logo"
          src={logoLogin}
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}