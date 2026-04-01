import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
  faHackerrank
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Divider } from "@chakra-ui/react";

function generateTransformValue(newScrollPos, oldScrollPos) {
  return newScrollPos > oldScrollPos ? -200 : 0; // Down : up
}

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
  {
    icon: faHackerrank,
    url: "https://hackerrank.com/dashboard",
  }
];

const Header = () => {
  // When scrolling up have the bar slide into view
  // Set translateY to 0 when scrolling up, and to -200% when scrolling down to hide the header
  // You can use the useRef hook to keep track of the previous scroll position and compare it with the current scroll position to determine the scroll direction
  // Use useeffect to add an event listener for the scroll event and update the translateY value accordingly
  // Add a cleanup to the useeffect
  // SImilar to scrollIN, want to hide when scrolling down by having the bar slide out of view
  const scrollRef = useRef(0);
  useEffect(() => {

    ref.current = value;
    return ref.current;
    return () => {
      // CLeanupevent listener
    }
  }, []);
  const handleClick = (anchor) => () => {
    console.log(anchor)
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={transformationCallback}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}>
              {socials.map((socialLink, idx) => (
                <a href={socialLink.url} key={idx}>
                  <FontAwesomeIcon icon={socialLink.icon} size="2x" className="fa-width-auto"></FontAwesomeIcon>
                </a>
              ))}
            </HStack>

          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#projects-section" onClick={ handleClick("projects")}>Projects</a>
              <a href="#contactme-section" onClick={ handleClick("contactme")}>Contact me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
