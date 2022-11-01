import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "../Components/PersonalProjects/projectCard";
import projectData from "../Data/projectsFrontPageData.json";

type Props = {};

export default function projects({}: Props) {
  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      textAlign="center"
      minHeight={"100vh"}
    >
      <SimpleGrid
        columns={[1, 2, 3]}
        spacing={3}
        padding={10}
        className="profile-card"
      >
        {projectData.map((data) => (
          <ProjectCard
            title={data.title}
            desc={data.desc}
            image={data.image}
            link={data.link}
            key={Math.random()}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
