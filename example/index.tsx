import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App, Row, Col } from '../dist'

const Main = () => {
  const [a, b] = React.useState()
  return (
    <>
      <App>
        <Row>
          <Col>1</Col>
          <Col>2</Col>
        </Row>
      </App>
    </>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
