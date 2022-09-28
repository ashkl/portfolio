import {
  Badge,
  Button,
  Heading,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

export default function ProfileCard() {
  const onResumeClick = (e: any) => {
    fetch("asshwin _resume_2022_small.pdf").then((res) => {
      res.blob().then((blob) => {
        const fileUrl = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileUrl;
        alink.download = "asshwin _resume_2022_small.pdf";
        alink.click();
      });
    });
    e.target.blur();
  };

  return (
    <>
      <Stack
        borderWidth="1px"
        borderRadius="none"
        borderColor={useColorModeValue("black", "white")}
        w={{ sm: "100%", md: "720px" }}
        height={{ sm: "30rem", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "black")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontFamily={"body"} textAlign={"center"}>
            ASSHWIN MUGUNDHARAJAH
          </Heading>
          <Heading fontSize={"2xl"} fontFamily={"body"} textAlign={"center"}>
            London, UK
          </Heading>
          <Stack direction={{ base: "column", md: "row" }}>
            <Text fontWeight={600} color={"gray.500"} size="sm">
              E-mail: contact@asshwin.com
            </Text>
            <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
              Phone: +44 7450073483
            </Text>
          </Stack>
          <Text
            textAlign={"center"}
            color={useColorModeValue("black", "white")}
            px={3}
          >
            Software programmer with experience in web application development.
          </Text>
          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.200", "gray.800")}
              fontWeight={"400"}
            >
              #REACT
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.200", "gray.800")}
              fontWeight={"400"}
            >
              #Frontend
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.200", "gray.800")}
              fontWeight={"400"}
            >
              #Node
            </Badge>
          </Stack>
          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              flex={1}
              fontSize={"sm"}
              borderWidth="1px"
              rounded={"none"}
              borderColor={useColorModeValue("black", "white")}
              bg={useColorModeValue("white", "black")}
              color={useColorModeValue("black", "white")}
              _focus={{
                bg: `${useColorModeValue("black", "white")}`,
                color: `${useColorModeValue("white", "black")}`,
              }}
              _hover={{ borderColor: "red" }}
              onClick={onResumeClick}
            >
              Download Résumé
            </Button>

            <Tooltip
              label="UNDER DEVELOPMENT"
              shouldWrapChildren
              rounded={"none"}
              borderWidth={"1px"}
              flex={1}
              bg={"red"}
              color={"white"}
            >
              <Button
                flex={1}
                fontSize={"sm"}
                borderWidth="1px"
                rounded={"none"}
                borderColor={useColorModeValue("black", "white")}
                bg={useColorModeValue("white", "black")}
                color={useColorModeValue("black", "white")}
                _focus={{
                  bg: `${useColorModeValue("black", "white")}`,
                  color: `${useColorModeValue("white", "black")}`,
                }}
                _hover={{ borderColor: "red" }}
                onClick={(e) => e.currentTarget.blur()}
                isDisabled
              >
                Personal Projects
              </Button>
            </Tooltip>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
