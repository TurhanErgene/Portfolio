import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import memories from '../public/images/Memories.png'
import chatapp from '../public/images/chatapp.png'
import realestate from '../public/images/realestateapp.png'
import todo from '../public/images/todo.png'
import yelp from '../public/images/yelp.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={22} mb={4} mt={2}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section>
          <WorkGridItem id="memories" title="Memories" thumbnail={memories}>
            Memories is a web app where you can write about a memory of yours.
            The project runs around the CRUD concept.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="chatapp"
            title="RealTime Chat App"
            thumbnail={chatapp}
          >
            A realtime chat application that created with vanilla javascript on
            frontend and node js on backend.
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem id="yelp" title="Yelp App" thumbnail={yelp}>
            This app created with PERN stack. Yelp is a platform where people
            can review and rate businesses.
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="todo" title="To Do App" thumbnail={todo}>
            This is a complete frontend project that was created with React Js.
            ToDo app is used to track the tasks that you want to complete.
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="realestate"
            title="Real Estate App"
            thumbnail={realestate}
          >
            A real estate web application using many technologies as on this
            website such as Next Js and Chakra-UI.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
