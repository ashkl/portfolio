import { Box, Center, Stack, useColorModeValue } from "@chakra-ui/react";
import type { NextPage } from "next";
import ProfileCard from "../Components/ProfileCard/ProfileCard";
import ThemeSwitch from "../Components/Utl/ThemeSwitch";

const Home: NextPage = () => {
  return (
    <Box minH="100vH" bg={useColorModeValue("gray.100", "black")}>
      <Center
        px={3}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        textAlign="center"
        minHeight={"100vh"}
        className="profile-card"
      >
        <Stack>
          <ProfileCard />
          <ThemeSwitch />
        </Stack>
      </Center>
    </Box>
  );
};

export default Home;
