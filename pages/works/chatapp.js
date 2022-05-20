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
          Real time Chat app <Badge> 2022</Badge>
        </Title>
        <P>
          A real-time chat application that is created with vanilla javascript
          on the frontend and node js on the backend. This app help provides a
          user interface that allows you to chat with your friends.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Vanillla Js and NodeJS</span>
          </ListItem>

          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/TurhanErgene/Realtime-Chat-Cord">
              Realtime Chat Cord <ExternalLinkIcon mb="1" mx="2px" />
            </Link>
          </ListItem>
        </List>
      </Container>

      <WorkImage src="/images/chatapp.png" alt="Memories App" />
    </Layout>
  )
}

export default Work
