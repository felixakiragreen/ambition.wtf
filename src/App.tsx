import React, { useState } from 'react'
import { MDXProvider } from '@mdx-js/react'

import { styled } from './ui'
import { Text, Link } from './components'

import { AccountsList } from './types'

import Home from './home'

/* 

THINGS TO DO BEFORE I CAN GIVE TO MEGAN

- [x] set up other MDXs
- [x] all the felixkai colors
- [x] clean up tokens → const colors → theme: { colors }

- [x] header
- [x] ambition SVGs

- [ ] import the icon libary I'm using on my other site

- [ ] footer
- [ ] different theme for behind / dark!?

- [ ] add placeholder shit for BUY (don't edit here)



*/

export const StyledApp = styled('main', {
  background: '$background',
  color: '$foreground',
})

const App: React.FC = () => {
  const [accounts, setAccounts] = useState<AccountsList>([])

  function updateAccounts(accounts: AccountsList) {
    setAccounts(accounts)
  }

  return (
    <StyledApp>
      <Home accounts={accounts} updateAccounts={updateAccounts} />
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
