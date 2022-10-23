import {
  Box,
  Center,
  ColorModeScript,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import ThemeSwitch from "./Components/Utl/ThemeSwitch";
import theme from "./theme";

export default function Layout({ children }: any) {
  return (
    <div>
      <Head>
        <title>ASSHWIN.M</title>
      </Head>
      <div>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <main>
          <Box minH="100vH" bg={useColorModeValue("gray.100", "black")}>
            {children}
          </Box>
        </main>
      </div>
    </div>
  );
}
