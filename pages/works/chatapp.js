import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout>
      <Container mt={4}>
        <Title>
          Real time Chat app <Badge> 2022</Badge>
        </Title>
        <P>
          A realtime chat application that created with vanilla javascript on
          frontend and node js on backend. This app help provides a user interface that allows you to chat with your friends. 
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Vanillla Js and NodeJS</span>
          </ListItem>
        </List>
      </Container>

      <WorkImage src="/images/Chatapp.png" alt="Memories App" />
    </Layout>
  )
}

export default Work
