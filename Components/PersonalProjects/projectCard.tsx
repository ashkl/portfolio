import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: String;
  desc: String;
  image: string;
  link: string;
};

export default function ProjectCard({ title, desc, image, link }: Props) {
  return (
    <Box
      bg={useColorModeValue("white", "black")}
      borderWidth="1px"
      borderColor={useColorModeValue("black", "white")}
      shadow="lg"
      position="relative"
      height="100%"
      maxWidth={"400px"}
    >
      <Box
        bg={useColorModeValue("white", "black")}
        borderColor={useColorModeValue("black", "white")}
        borderWidth="1px"
        shadow="lg"
        position="relative"
        width="100%"
        height="300px"
      >
        <Image src={image} layout="fill" objectFit="cover" alt={`Image of`} />
      </Box>
      <Box p="4">
        <Flex
          mt="1"
          justifyContent="space-between"
          alignContent="left"
          flexDirection="column"
        >
          <Heading fontSize={"2xl"} fontFamily={"body"} textAlign={"left"}>
            {title}
          </Heading>
          <Text color={useColorModeValue("black", "white")}>{desc}</Text>
          <Link href={`/projects/${link}`}>
            <Button
              mt={3}
              fontSize={"sm"}
              borderWidth="1px"
              rounded={"none"}
              width="100%"
              borderColor={useColorModeValue("black", "white")}
              bg={useColorModeValue("white", "black")}
              color={useColorModeValue("black", "white")}
              boxShadow={"2xl"}
              _hover={{ borderColor: "red" }}
            >
              ENTER
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}
