import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => {
  return (
    <Layout>
      <Container mt={4}>
        <Title>
          Real Estate platform <Badge> 2022</Badge>
        </Title>
        <P>
          This is a complete frontend project that was created with Next Js and Chakra-UI.
          In this app, you can search real estate by specifications like price, size, purpose, and more. 
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next JS and Chakra-UI</span>
          </ListItem>

          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://ergene-real-estate-9izjbezax-turhanergene.vercel.app/">
              Real Estate platform
              <ExternalLinkIcon mb="1" mx="4px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/TurhanErgene/Real-Estate">
              Real Estate source codes
              <ExternalLinkIcon mb="1" mx="4px" />
            </Link>
          </ListItem>
        </List>
      </Container>

      <WorkImage src="/images/realestateapp.png" alt="Yelp Clone App" />
    </Layout>
  )
}

export default Work
