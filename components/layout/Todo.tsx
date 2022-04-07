import { Box, Center, Container } from "@chakra-ui/react";
import { AddTask, Header, SubHeader, Task } from "@components/common";
import {
  CONTAINER_MAX_WIDTH,
  TODO_LAYOUT_HEIGHT,
  TODO_LAYOUT_WIDTH,
} from "@config/layout";
import React from "react";

const TodoLayout: React.FC = () => {
  return (
    <Container maxW={CONTAINER_MAX_WIDTH} px={[0, null, null, "initial"]}>
      <Center border={"1px solid todo.green"} h={"100vh"}>
        <Box
          w={["100%", null, null, TODO_LAYOUT_WIDTH]}
          minH={["100vh", null, null, "55rem"]}
          h={["100vh", null, null, "auto"]}
          boxShadow={"md"}
          borderRadius={["none", null, null, "4rem"]}
        >
          <Header />
          <SubHeader />
          <Task />
          <AddTask />
        </Box>
      </Center>
    </Container>
  );
};

export { TodoLayout };
