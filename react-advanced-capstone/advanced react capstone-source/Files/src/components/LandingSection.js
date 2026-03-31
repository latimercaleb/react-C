import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio = "A frontend developer specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar size="md" name='Pete Test' src=' https://i.pravatar.cc/150?img=7' />
    <Heading size="sm">{ greeting }</Heading>
    <Heading size="2xl">{ bio }</Heading>
  </FullScreenSection>
);

export default LandingSection;
