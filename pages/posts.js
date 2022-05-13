import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import directoryService from '../public/images/directoryService.jpg'

const posts = () => {
  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={22} mb={10} mt={2}>
          Some of my posts in swedish
        </Heading>

        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="Katalogtjänst för ett företag"
              thumbnail={directoryService}
              href="https://docs.google.com/document/d/1eT41VGvW3eyxfmvpiH_G-qPyk8XrNf1Fo3iA9hX0wEE/edit?usp=sharing"
            >
              In this article we break down how to setup a directory service and
              configure it.
            </GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default posts
