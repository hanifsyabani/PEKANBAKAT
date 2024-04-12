import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsFillPatchQuestionFill } from "react-icons/bs";

export default function Faq() {
  const question = [
    {
      id: 1,
      title: "Apakah siswa dari luar Kabupaten Musi Banyuasin boleh?",
      desc: "Perlombaan hanya untuk siswa yang berada di Kabupaten Musi Banyuasin",
    },
    {
      id: 2,
      title: "Bagaimana cara mendaftar perlombaan?",
      desc: "Silahkan buat akun terlebih dahulu, lalu klik tombol registrasi",
    },
    {
      id: 3,
      title: "Apakah boleh mendaftar lebih dari 1 cabang?",
      desc: "Peserta dibatasi hanya boleh mendaftar di 1 cabang perlombaan",
    },
    {
      id: 4,
      title: "Apakah boleh mendaftar manual?",
      desc: "Pendaftran manual boleh jika website sedang down",
    },
  ];
  return (
    <>
      <div className="mt-10 lg:w-[70%] mx-auto border-2 border-gray-200 p-4 rounded-lg bg-white">
        <Accordion allowToggle>
          {question.map((quest) => {
            return (
              <AccordionItem key={quest.id} mb={4}>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={"lg"}
                      fontWeight={"semibold"}
                      color={"blue.800"}
                    >
                      {quest.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{quest.desc}</AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
      <div className="flex items-center justify-center mt-2 text-gray-800 gap-2">
        <BsFillPatchQuestionFill size={20} />
        <h1 className="text-lg">
          Masih ada pertanyaan?
          <Link href={"/question"} className="text-primary font-bold">
            Ajukan
          </Link>
        </h1>
      </div>
    </>
  );
}
