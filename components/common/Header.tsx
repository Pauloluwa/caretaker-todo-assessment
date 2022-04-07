import { Center, Text } from "@chakra-ui/react";
import { isoFormat } from "@utils/dateFormats";
import React from "react";

const Header: React.FC = () => {
  return (
    <Center
      w={"full"}
      h={"9rem"}
      bg={"todo.orange"}
      color={"todo.white"}
      borderTopRadius={["none", null, null, "4rem"]}
    >
      <Text fontSize={"2rem"}>{isoFormat(Date())}</Text>
    </Center>
  );
};

export { Header };
