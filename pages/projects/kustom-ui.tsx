import React, { useEffect, useState } from "react";
import { ImageMap } from "@qiuz/react-image-map";
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { AreaType } from "./AreaType";

type Props = {};

export default function KustomUI({}: Props) {
  const [scrolled, setScrolled] = useState(0);
  const [areaMap, setAreaMap] = useState<any>([]);
  const [modalHeader, setModalHeader] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
    return () => window.removeEventListener("scroll", scrollProgress);
  }, []);

  const scrollProgress = () => {
    const scrollpx = document.documentElement.scrollTop;
    const winHeightpx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollLen = Math.ceil((scrollpx / winHeightpx) * 17);

    if (scrollLen >= 15) {
      setAreaMap(firstPageMapArea);
    } else {
      setAreaMap([]);
    }

    setScrolled(scrollLen);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const firstPageMapArea: object[] = [
    {
      width: "90%",
      height: "4.25%",
      left: "5%",
      top: "8.75%",
      style: { background: "rgba(255, 0, 0, 0.5)" },
    },
    {
      width: "90%",
      height: "7%",
      left: "5%",
      top: "13.5%",
      style: { background: "rgba(255, 0, 0, 0.5)" },
    },
    {
      width: "90%",
      height: "22.25%",
      left: "5%",
      top: "20.9%",
      style: { background: "rgba(255, 0, 0, 0.5)" },
    },
    {
      width: "90%",
      height: "9.75%",
      left: "5%",
      top: "44%",
      style: { background: "rgba(255, 0, 0, 0.5)" },
    },
    {
      width: "38%",
      height: "14.25%",
      left: "5%",
      top: "54%",
      style: { background: "rgba(255, 0, 0, 0.5)" },
    },
    {
      width: "50%",
      height: "14.25%",
      left: "45%",
      top: "54%",
      style: { background: "rgba(255, 0, 0, 0.5)" },
    },
    {
      width: "90%",
      height: "2.75%",
      left: "5%",
      top: "69%",
      style: { background: "rgba(255, 0, 0, 0.5)" },
    },
  ];

  const onMapClick = (area: AreaType, index: number) => {
    const mapNum = index + 1;
    switch (mapNum) {
      case 1:
        setModalHeader("Home");
        break;
      case 2:
        setModalHeader("Music");
        break;
    }
    setShowModal(true);
  };

  const ImageMapComponent = React.useMemo(
    () => (
      <ImageMap
        className="usage-map"
        src={`/pics/klwp/hud-opening/hud-opening-${scrolled
          .toString()
          .padStart(2, "0")}.jpeg`}
        map={areaMap}
        style={{ maxHeight: "95vh" }}
        onMapClick={onMapClick}
      />
    ),
    [scrolled]
  );

  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      textAlign="center"
    >
      <div style={{ height: "300vh" }}>
        <Box
          style={{
            top: 0,
            position: "sticky",
            objectFit: "contain",
          }}
        >
          <Box padding={3}>{ImageMapComponent}</Box>
          <Modal isCentered isOpen={showModal} onClose={handleClose}>
            <ModalOverlay
              bg="blackAlpha.300"
              backdropFilter="blur(10px) hue-rotate(90deg)"
            />
            <ModalContent>
              <ModalHeader>{modalHeader} Komponent</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <ReactPlayer
                  url="/videos/homekomp.mp4"
                  width={"100%"}
                  height={"100%"}
                  loop={true}
                  playing={true}
                  muted={true}
                  volume={0}
                />
                <Text color={useColorModeValue("black", "white")} py={3}>
                  Software programmer with experience in web application
                  development.
                </Text>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      </div>
    </Box>
  );
}
