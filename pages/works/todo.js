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
          Todo App <Badge> 2021</Badge>
        </Title>
        <P>
          This is a complete frontend project that was created with React Js.
          ToDo app is used to track the tasks that you want to complete. You can
          simply create a task by typing it in the text field and clicking the
          plus button creates the task then you can mark it as completed or
          delete it. You can sort the tasks by either if it is completed or not.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React</span>
          </ListItem>

          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/TurhanErgene/ToDo_App">
              Todo App
              <ExternalLinkIcon mb="1" mx="4px" />
            </Link>
          </ListItem>
        </List>
      </Container>

      <WorkImage src="/images/todo.png" alt="Yelp Clone App" />
    </Layout>
  )
}

export default Work
