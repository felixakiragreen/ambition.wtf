import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import { styled } from './ui'
import { Text, Link } from './components'

import Home from './home'

/* 

TODO


*/

export const StyledApp = styled('main', {
  background: '$background',
  color: '$foreground',
})

const App: React.FC = () => {
  return (
    <StyledApp>
      <Home />
    </StyledApp>
  )
}

const components = {
  h1: (props) => <Text as="h1" mdx="h1" {...props} />,
  h2: (props) => <Text as="h2" mdx="h2" {...props} />,
  h3: (props) => <Text as="h3" mdx="h3" {...props} />,
  h4: (props) => <Text as="h4" mdx="h4" {...props} />,
  h5: (props) => <Text as="h5" mdx="h5" {...props} />,
  h6: (props) => <Text as="h6" mdx="h6" {...props} />,
  p: (props) => <Text mdx="p" {...props} />,
  a: (props) => <Link mdx="a" {...props} />,
  // code: Pre,
  // inlineCode: Code
}

// export default App

export default (props) => (
  <MDXProvider components={components}>
    <App {...props} />
  </MDXProvider>
)
