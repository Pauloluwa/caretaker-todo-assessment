import { Center, Checkbox, HStack, Text } from "@chakra-ui/react";
import { MotionBox, MotionHStack } from "@components/animations/FramerAnim";
import { DIV_HEIGHT } from "@config/layout";
import { useTaskStore } from "@hooks/task";
import React, { useEffect, useState } from "react";
import { TaskStore } from "types";
import { CustomIndicators } from "./custom/CustomIndicators";

const Task: React.FC = () => {
  const {
    filteredTodos: todos,
    toggleChecked,
    resetFilterTodos,
  } = useTaskStore();
  const [filteredTodoArr, setFilteredlTodoArr] = useState<TaskStore[]>([]);

  useEffect(() => {
    resetFilterTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof window !== undefined) {
      setFilteredlTodoArr(todos);
    }
  }, [todos]);

  return (
    <MotionBox
      maxH={["calc(100vh - 25rem)", null, null, "60vh"]}
      overflowY={"scroll"}
      layout
    >
      {[...filteredTodoArr].map((todo) => (
        <MotionHStack
          layout
          key={todo.id}
          justify={"space-around"}
          h={DIV_HEIGHT}
          borderBottom={"1px solid"}
          borderColor={"todo.off_white"}
          cursor={"pointer"}
          onClick={() => toggleChecked(todo.id)}
        >
          <HStack w={"65%"} h={"full"} spacing={6}>
            <Center
              as={Checkbox}
              bg={"todo.off_white"}
              rounded={"full"}
              borderColor={"todo.blue"}
              isChecked={todo.isDone}
              sx={{
                "& span": {
                  w: "3.2rem",
                  h: "3.2rem",
                  rounded: "full",
                  boxShadow: "none !important",
                  "&[data-checked] div svg": {
                    w: "1.2rem",
                  },
                },
              }}
              onChange={() => toggleChecked(todo.id)}
            />
            <Text
              fontSize={"1.5rem"}
              maxH={"full"}
              overflowY={"scroll"}
              sx={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {todo.task}
            </Text>
          </HStack>
          <HStack align={"center"} justify={"center"} maxW={"25%"}>
            <CustomIndicators color={todo.colorTag} isSmall />
          </HStack>
        </MotionHStack>
      ))}
    </MotionBox>
  );
};

export { Task };
