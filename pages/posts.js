import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import directoryService from '../public/images/directoryService.jpg'
import dhcp from '../public/images/dhcp.png'
// import addns from 'images/ad_dns.png'
import network from '../public/images/manageNetwork.png'

const posts = () => {
  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={22} mb={6} mt={2}>
          Some of my posts in swedish
        </Heading>

        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="Katalogtjänst för ett företag"
              thumbnail={directoryService}
              href="https://docs.google.com/document/d/1eT41VGvW3eyxfmvpiH_G-qPyk8XrNf1Fo3iA9hX0wEE/edit?usp=sharing"
            >
              In this article, we break down how to set up a directory service and
              configure it.
            </GridItem>

            <GridItem
              title="Setting a DHCP Server"
              thumbnail={dhcp}
              href="https://docs.google.com/document/d/1K2B8R11RjvVp5WC_nTn9zU2Jx3PNUOLoci2O-IBqR-I/edit?usp=sharing"
            >
              This article walks you through how to set up a windows server and
              configure DHCP for it.
            </GridItem>

            <GridItem
              title="AD and DNS"
              thumbnail='images/ad_dns.png'
              href="https://docs.google.com/document/d/1IcKOl9TARdR8GRoVpECkd6kVId9nU35jWV2SHsY1BYQ/edit?usp=sharing"
            >
              Have ever been interested in how to set up AD and DNS for your
              windows servers? This article will guide you through how to
              configure an Active Directory and Domain Name Service on it.
            </GridItem>

            <GridItem
              title="Nätverkstjänster"
              thumbnail={network}
              href="https://docs.google.com/document/d/1WduohShYqaIVo088N7JL7kpcGXvKMRc8_Wa7oGJacIw/edit?usp=sharing"
            >
              You want to connect a printer or another computer in your network?
              This article will guide you through how to do it.
            </GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default posts
