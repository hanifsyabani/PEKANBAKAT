import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function CardDash({
  title,
  image,
  deskripsi,
  link,
}: {
  title: string;
  image: any;
  deskripsi: string;
  link: string;
}) {
  return (
    <Card maxW="sm" cursor="pointer">
      <CardBody>
        <Image src={image} alt="vocal" loading="lazy" className="hover:scale-110 transition-all" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{deskripsi}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link href={`${link}`}>
          <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Register
          </button>
        </Link>
      </CardFooter>
    </Card>
  );
}
