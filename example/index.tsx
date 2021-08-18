import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App, Container, Segment, List, Button, Card, NumberInput } from '../src'

const Main = () => {
  const [on, setOn] = React.useState(true)

  const data = [1, 2, 3, 4, 5, 9, 6, 7, 8]
  return (
    <App>
      <Container fullScreen relative>
        <Card
          cssOptions={() => ({
            padding: '1em',
            height: '200px',
          })}
        >
          <NumberInput
            onChange={(v) => {
              console.log(v)
            }}
          />
        </Card>
      </Container>
    </App>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
