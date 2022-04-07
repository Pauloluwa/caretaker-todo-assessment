import { Box } from "@chakra-ui/react";
import React from "react";

interface ICIndicator {
  color: string;
  isSmall?: boolean;
  pickedTag?: number;
  onTagClick?: () => void;
}
const CustomIndicators: React.FC<ICIndicator> = ({
  color,
  isSmall,
  pickedTag,
  onTagClick,
}) => {
  return (
    <Box
      bg={color}
      rounded={isSmall ? "lg" : ["xl", null, null, "2xl"]}
      w={isSmall ? "1.8rem" : ["2.2rem", null, null, "3.2rem"]}
      h={isSmall ? "1.8rem" : ["2.2rem", null, null, "3.2rem"]}
      onClick={onTagClick}
      {...(pickedTag === 1
        ? { outline: "3px solid", outlineColor: "todo.light_grey" }
        : null)}
    />
  );
};

export { CustomIndicators };
