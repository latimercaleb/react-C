import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
// TODO: Pick up with step 3, test this either in the lab or pull it down locally to test
const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src= {imageSrc}
        alt="Card Image"
      />
      <Card.Body gap="2">
        <Card.Title>{ title}</Card.Title>
        <Card.Description>
          { description}
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="ghost">See More</Button>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </Card.Footer>
    </Card.Root>
  return null;
};

export default Card;
