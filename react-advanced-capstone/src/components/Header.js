import React, { useState, useEffect, useRef } from "react";
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
  const scrollRef = useRef(0);
  const [transformFunction, setTransformFunction] = useState("");
  useEffect(() => {
    const handleScrollEvent = () => {
      const latestScrollPosition = window.scrollY;
      const oldScrollPos = scrollRef.current;
      scrollRef.current = latestScrollPosition;
      setTransformFunction(`translateY(${generateTransformValue(latestScrollPosition, oldScrollPos)}px)`);
    }
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    }
  }, []);

  const handleClick = (anchor) => () => {
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
      transform={transformFunction}
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
