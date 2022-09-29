import { Heading, TabPanel } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

export default function Experience() {
  return (
    <TabPanel>
      <Heading
        fontFamily={"body"}
        textAlign={"center"}
        as={motion.div}
        padding={"10"}
      >
        PROFESSIONAL EXPERIENCE
      </Heading>
    </TabPanel>
  );
}
