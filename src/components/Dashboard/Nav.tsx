"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { getSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TbLayoutDashboard } from "react-icons/tb";
import { GrTask } from "react-icons/gr";
import { MdOutlineDashboard } from "react-icons/md";

export default function Nav({ title }: { title: string }) {
  const [userData, setUserData] = useState<{
    name?: string | null;
    email?: string | null;
    image?: string | null;
  } | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const session = await getSession();
      if (session?.user) {
        setUserData(session.user);
      }
    }
    fetchData();
  }, []);

  const toast = useToast();
  const router = useRouter();
  async function logout() {
    await signOut();
    toast({
      title: "Logout Berhasil",
      description: "Logout Berhasil",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    router.push("/");
  }

  return (
    <>
      <nav className="w-full p-3 flex justify-between items-center shadow-lg">
        <div className="flex text-center gap-4 items-center">
          <TbLayoutDashboard size={25} onClick={() => setNavbar(!navbar)} className="lg:hidden"/>
          <h1 className="text-lg font-bold hidden lg:block">{title}</h1>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <p>{userData?.name}</p>
          </div>
          <button
            className="bg-secondary text-white font-bold hover:bg-yellow-600 transition-all py-2 px-4 rounded-lg"
            onClick={onOpen}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* mobile */}
      <div
        className={`fixed ${
          navbar ? "left-0" : "-left-1/2"
        } w-1/2 transition-all z-50  h-screen bg-gradient-to-r from-primary to-blue-400`}
      >
        <div className="mt-10">
          <div
            className="flex items-center gap-3 hover:bg-blue-100 py-4 hover:border-r-4 pl-3 rounded-l-xl border-blue-900 cursor-pointer group "
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            <MdOutlineDashboard
              size={25}
              className="text-white group-hover:text-blue-900"
            />
            <h1 className="font-semibold text-sm text-white group-hover:text-blue-900">
              Dashboard
            </h1>
          </div>
          <div
            className="flex items-center gap-3 hover:bg-blue-100 py-4 hover:border-r-4 pl-3 rounded-l-xl border-blue-900 cursor-pointer group "
            onClick={() => {
              router.push("/dashboard/pendaftaran");
            }}
          >
            <GrTask
              size={25}
              className="text-white group-hover:text-blue-900"
            />
            <h1 className="font-semibold text-sm text-white group-hover:text-blue-900">
              Pendaftaran Lomba
            </h1>
          </div>
        </div>
      </div>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pekan Dashboard</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <h1>Apakah yakin anda ingin keluar?</h1>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={logout}>
              Yakin
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
