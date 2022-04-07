import {
  HStack,
  Input,
  InputLeftElement,
  InputGroup,
  useEventListener,
} from "@chakra-ui/react";
import { DIV_HEIGHT } from "@config/layout";
import React, { useState } from "react";
import { CustomIndicators } from "./custom/CustomIndicators";
import { SmallAddIcon } from "@chakra-ui/icons";
import { indicatorColors } from "@config/data";
import { useTaskStore } from "@hooks/task";
import { TaskStore, TTags } from "types";
import { v4 } from "uuid";

const AddTask: React.FC = () => {
  const { addTodos } = useTaskStore();
  const [todoEvent, setTodoEvent] = useState("");
  const [pickedTagColor, setPickedTagColor] = useState<TTags | null>(null);

  const handleAddTodo = () => {
    if (!pickedTagColor || !todoEvent) return;
    const { icolor } = pickedTagColor as TTags;
    const payload: TaskStore = {
      id: v4(),
      task: todoEvent,
      colorTag: icolor,
      isDone: false,
    };
    addTodos(payload);
    setTodoEvent("");
    setPickedTagColor(null);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      return handleAddTodo();
    }
  };

  useEventListener("keypress", handleKeyPress);

  return (
    <HStack justify={"space-evenly"} h={DIV_HEIGHT} w={"full"}>
      <HStack maxW={"70%"} minW={"65%"} h={"full"} spacing={6}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" left={"5px"}>
            <SmallAddIcon color={"todo.orange"} fontSize={"3.2rem"} />
          </InputLeftElement>
          <Input
            fontSize={"1.5rem"}
            h={"full"}
            ml={"1.5rem"}
            overflowY={"scroll"}
            variant={"unstyled"}
            placeholder={"Add Task"}
            sx={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
            value={todoEvent}
            onChange={(e) => setTodoEvent(e.target.value)}
          />
        </InputGroup>
      </HStack>
      <HStack justify={"center"} align={"center"} maxW={"25%"} spacing={4}>
        {[...indicatorColors].map((color) => (
          <CustomIndicators
            key={color.id}
            color={color.icolor}
            {...(pickedTagColor !== null && {
              pickedTag: color.id === (pickedTagColor as TTags).id ? 1 : 0,
            })}
            onTagClick={() => setPickedTagColor(color)}
          />
        ))}
      </HStack>
    </HStack>
  );
};

export { AddTask };
