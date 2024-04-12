import Image from "next/image";
import { IoMdArrowRoundBack } from "react-icons/io";
import logo from "@/assets/LogoKmmuba.png";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <div className="flex justify-between px-4 py-2">
      <div className="flex items-center gap-3 cursor-pointer " onClick={() => router.back()}>
        <div className="bg-primary p-2 rounded-full hover:bg-white group transition-all">
          <IoMdArrowRoundBack size={20} className="text-white group-hover:text-primary"/>
        </div>
        <h1 className="text-md font-semibold">Kembali</h1>
      </div>
      <Image src={logo} alt="logo" width={50} height={50} />
    </div>
  );
}
