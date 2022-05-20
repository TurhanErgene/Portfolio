import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout>
      <Container mt={4}>
        <Title>
          Memories <Badge> 2021</Badge>
        </Title>
        <P>
          Memories is a web app where you can write about a memory of yours. The
          project runs around the CRUD concept. Cannot make the project public
          yet due to some API credentials. Membership features will be added
          soon! I am also thinking to make a similar project with different
          technologies, stay tuned :D
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://anonymous-diary.netlify.app/">
              https://anonymous-diary.netlify.app/ <ExternalLinkIcon mb="1"/>
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, React, MongoDB</span>
          </ListItem>
        </List>
      </Container>

      <WorkImage src="/images/Memories.png" alt="Memories App" />
    </Layout>
  )
}

export default Work
