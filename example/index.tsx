import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App, Container, FloatingWindow, Badge, List, Button, Card } from '../src'

const Main = () => {
  const [on, setOn] = React.useState(false)

  const data = [1, 2, 3, 4, 5, 9, 6, 7, 8]
  return (
    <App>
      <Container fullScreen relative>
        <FloatingWindow draggable={false}>
          <Card>124</Card>
        </FloatingWindow>
      </Container>
    </App>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
