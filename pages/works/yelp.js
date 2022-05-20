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
          Yelp Clone App <Badge> 2022</Badge>
        </Title>
        <P>
          This app was created with PERN stack. Yelp is a platform where people
          can review and rate businesses. In this clone app, you can create a
          review, rate a business and also search for businesses. You can also
          see the reviews of the businesses you have visited.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, NodeJS and PostgreSQL</span>
          </ListItem>

          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/TurhanErgene/Yelp-Clone">
              Yelp Clone App
              <ExternalLinkIcon mb="1" mx="4px" />
            </Link>
          </ListItem>
        </List>
      </Container>

      <WorkImage src="/images/yelp.png" alt="Yelp Clone App" />
    </Layout>
  )
}

export default Work
