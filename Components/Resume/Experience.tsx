import { Heading, TabPanel, Text } from "@chakra-ui/react";
import React from "react";
import ExpData from "../../Data/experienceData.json";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <TabPanel>
      <div className={styles.container}>
        <div className="container">
          <ul>
            {ExpData.slice(0)
              .reverse()
              .map((item) => (
                <li key={Math.random()}>
                  <span></span>
                  <Heading
                    textAlign={"left"}
                    fontFamily={"body"}
                    fontSize={"3xl"}
                  >
                    {item.title}
                  </Heading>
                  <Text textAlign={"left"} fontSize={"sm"} pt={2}>
                    {item.desc}
                  </Text>
                  <div>
                    <span>{item.date.end}</span>
                    <span>{item.date.start}</span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </TabPanel>
  );
}
