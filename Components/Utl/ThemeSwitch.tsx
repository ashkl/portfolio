import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function ThemeSwitch({}: Props) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button
        fontSize={"sm"}
        borderWidth="1px"
        rounded={"none"}
        width={{ sm: "100%", md: "25%" }}
        borderColor={useColorModeValue("black", "white")}
        bg={useColorModeValue("white", "black")}
        color={useColorModeValue("black", "white")}
        boxShadow={"2xl"}
        _hover={{ borderColor: "red" }}
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
    </>
  );
}
