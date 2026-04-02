import { Heading, HStack, Image, Text, VStack, useColorModeValue} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Card = ({ title, description, imageSrc }) => {
  const darkTextColor = useColorModeValue("gray.800", "gray.50");
    return (
      <>
        <VStack
            backgroundColor="white"
            borderRadius="xl"
            overflow="hidden"
            alignItems="start">
          <Image src={imageSrc} alt={title} borderRadius="xl" />
          <VStack p={4} alignItems="start" spacing={4}>
            <Heading size="md" color={darkTextColor}>{title}</Heading>
            <Text color="gray.600" fontSize="lg">{description}</Text>
            <HStack spacing={2}>
              <Text color={darkTextColor}>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
            </HStack>
          </VStack>
        </VStack>
      </>
    );
};

export default Card;
