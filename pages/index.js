import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  Text
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'

import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
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
          <p>Digital Craftman</p>
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
            Developed little games
          </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          I ♥;
          </Heading>
          <Paragraph>
            Any kind of art but my favorites are digital art, <Link href="https://vsco.co/turhan-erg/gallery">photography</Link>, music and Muay Thai.
          </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
