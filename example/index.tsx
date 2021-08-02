import { useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import { App, Container, Progress, Alert, Loading, Card, Carousel, Collapse, PullToRefresh } from '../src'
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const Main = () => {
  const [show, setShow] = useState(true)
  const [show2, setShow2] = useState(0)
  // useEffect(() => {
  //   setInterval(() => {
  //     setShow2((v) => v + 0.1)
  //   }, 10)
  // }, [])
  return (
    <App>
      <Container scroll fullScreen>
        <Progress percent={show2} onClick={() => setShow2((v) => v + 1)} />
      </Container>
    </App>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
