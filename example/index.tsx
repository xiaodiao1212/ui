import { useState } from 'react'
import * as ReactDOM from 'react-dom'
import { App, Container, Modal, List, Loading, Card, Carousel, Collapse, PullToRefresh } from '../src'
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const Main = () => {
  const [show, setShow] = useState(true)
  const [show2, setShow2] = useState(false)
  return (
    <App>
      <Container fullScreen scroll>
        <Modal visible={show} title="e" maskClosable={true}></Modal>
      </Container>
    </App>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
