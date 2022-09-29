import {
  Badge,
  Stack,
  TabPanel,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";
import React, { useState } from "react";
import SkillData from "../../Data/skillsData.json";

type Props = {};

export default function Skills({}: Props) {
  return (
    <TabPanel>
      <Stack align={"center"} justify={"center"} direction={"row"} mt={3}>
        <Wrap align={"center"} justify={"center"}>
          {SkillData.Programming.map((item) => (
            <Badge
              key={Math.random()}
              px={2}
              py={1}
              bg={useColorModeValue("gray.200", "gray.800")}
              fontWeight={"400"}
            >
              {item.name}
            </Badge>
          ))}
        </Wrap>
      </Stack>
      <Stack align={"center"} justify={"center"} direction={"row"} mt={3}>
        <Wrap align={"center"} justify={"center"}>
          {SkillData.frameworksAndLibraries.map((item) => (
            <Badge
              key={Math.random()}
              px={2}
              py={1}
              bg={useColorModeValue("gray.200", "gray.800")}
              fontWeight={"400"}
            >
              {item.name}
            </Badge>
          ))}
        </Wrap>
      </Stack>
      <Stack align={"center"} justify={"center"} direction={"row"} mt={3}>
        <Wrap align={"center"} justify={"center"}>
          {SkillData.databases.map((item) => (
            <Badge
              key={Math.random()}
              px={2}
              py={1}
              bg={useColorModeValue("gray.200", "gray.800")}
              fontWeight={"400"}
            >
              {item.name}
            </Badge>
          ))}
        </Wrap>
      </Stack>
      <Stack align={"center"} justify={"center"} direction={"row"} mt={3}>
        <Wrap align={"center"} justify={"center"}>
          {SkillData.misc.map((item) => (
            <Badge
              key={Math.random()}
              px={2}
              py={1}
              bg={useColorModeValue("gray.200", "gray.800")}
              fontWeight={"400"}
            >
              {item.name}
            </Badge>
          ))}
        </Wrap>
      </Stack>
    </TabPanel>
  );
}
