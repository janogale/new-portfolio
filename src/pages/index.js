import { Link as ChakraLink, Text, Icon, Box, Divider } from "@chakra-ui/core";
import Head from "next/head";

import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { SkillSet } from "../components/SkillSet";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Projects } from "../components/Projects";

const Index = () => (
  <Container>
    <Head>
      <title>Mukhtar Mahamed - Site</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Main>
      <Box as="header" position="relative" py="12">
        <Nav />
        <Box position="absolute" top="1rem" right="1rem">
          <DarkModeSwitch />
        </Box>
      </Box>
      <Divider borderColor="green.200" />

      <Box id="about" as="section" py="12">
        <About />
      </Box>
      <Box id="skillset" as="section" py="12">
        <SkillSet />
      </Box>
      <Box id="projects" as="section" py="12">
        <Projects />
      </Box>
      <Box id="contact" as="section" py="12">
        <Contact />
      </Box>
    </Main>

    <Footer />
  </Container>
);

export default Index;
