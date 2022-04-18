import React from 'react'
import Typical from 'react-typical'

const Title = React.memo(() => {
  return (
    <Typical
      loop={Infinity}
      wrapper="p"
      steps={['Full-stack Developer', 2000, 'Digital Craftman', 2000]}
    />
  )
})

export default Title
