import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App, Container, Button, useCustomTheme } from '../src'

const Main = () => {
  return (
    <App>
      <Container>
        <Button>1</Button>
      </Container>
    </App>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
