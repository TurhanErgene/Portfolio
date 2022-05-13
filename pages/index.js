import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  List,
  ListItem,
  Button,
  Text,
  Icon
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'

import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Title from '../components/title'
import Layout from '../components/layouts/article'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.200', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer in Sweden
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Turhan Ergene
            </Heading>

            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="4xl"
            >
              <Title />
            </Text>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="125px"
              display="inline-block"
              borderRadius="full"
              src="/images/CVpic.jpg"
              alt="CV pic"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I am a freelancer full-stack developer based in Malmö. I have been
            working with Javascript and its libraries and frameworks like React
            and Node Js for a while. I have created a bunch of{' '}
            <a
              target="_blank"
              rel="noreferrer"
              passHref
              href="https://github.com/TurhanErgene?tab=repositories"
            >
              <Link>projects</Link>
            </a>{' '}
            with them.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink passHref href="/works" scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                <Text mb={0.5}>My portfolio</Text>
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Istanbul, Turkey.
          </BioSection>
          <BioSection>
            <BioYear>2020 - 2021</BioYear>
            Developed some little games
          </BioSection>
          <BioSection>
            <BioYear>2021 - Present</BioYear>
            Working on web applications and data science
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            I ♥;
          </Heading>
          <Paragraph>
            Any kind of art but my favorites are digital art,{' '}
            <Link href="https://vsco.co/turhan-erg/gallery">photography</Link>,
            jazz and Muay Thai.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Social Media Accounts
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/TurhanErgene" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @TurhanErgene
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://www.linkedin.com/in/turhan-e-b25916113/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @TurhanErgene
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
