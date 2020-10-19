import { Flex} from "@chakra-ui/core";

export const Footer = (props) => {
  return (
    <Flex
      as="footer"
      display="flex"
      justifyContent="center"
      position="relative"
      bg="gray.500"
      zIndex={10}
      width="100%"
      bottom="0"
      py="4rem"
      {...props}
    />
  );
};
