import { HStack, Text, useBoolean } from "@chakra-ui/react";
import { indicatorColors } from "@config/data";
import { DIV_HEIGHT } from "@config/layout";
import { useTaskStore } from "@hooks/task";
import React, { useEffect, useState } from "react";
import { TTags } from "types";
import { CustomIndicators } from "./custom/CustomIndicators";

const SubHeader: React.FC = () => {
  const { filterTodos, filteredTodosLen, todos } = useTaskStore();
  const [todoLen, setTodoLen] = useState<number>(0);
  const [pickedTagColor, setPickedTagColor] = useState<TTags | null>(null);
  const [isFilterActive, setIsFilterActive] = useBoolean();

  const handleFilterClick = (color: TTags) => {
    filterTodos(color.icolor);
    setPickedTagColor(color);
    setIsFilterActive.on();
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      setTodoLen(filteredTodosLen);
      if (filteredTodosLen === todos.length) {
        setPickedTagColor(null);
      }
    }
  }, [filteredTodosLen, todos]);

  return (
    <HStack
      w={"full"}
      h={DIV_HEIGHT}
      justify={"space-evenly"}
      mx={"auto"}
      bg={"todo.off_white"}
      borderBottom="1px solid"
      borderColor={"todo.grey"}
    >
      <Text
        fontWeight={"bold"}
        fontSize={["1.5rem", null, null, "2rem"]}
        maxW={"70%"}
        minW={"65%"}
      >
        {isFilterActive
          ? `Filtering and showing ${todoLen} task${todoLen > 1 ? "s" : ""}`
          : `Showing ${todoLen} task${todoLen > 1 ? "s" : ""}`}
      </Text>
      <HStack spacing={4} maxW={"25%"} align={"center"} justify={"center"}>
        {[...indicatorColors].map((color) => (
          <CustomIndicators
            key={color.id}
            color={color.icolor}
            {...(pickedTagColor !== null && {
              pickedTag: color.id === (pickedTagColor as TTags).id ? 1 : 0,
            })}
            onTagClick={() => handleFilterClick(color)}
          />
        ))}
      </HStack>
    </HStack>
  );
};

export { SubHeader };
