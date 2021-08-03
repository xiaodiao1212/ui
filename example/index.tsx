import { useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import { App, Container, Textarea, Loading, Card, Carousel, Collapse, PullToRefresh, AppBar } from '../src'
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
        <AppBar>124</AppBar>
        <Container
          cssOptions={{
            overflow: 'hidden',
            height: '70%',
          }}
        >
          <PullToRefresh
            onRefresh={(o) => {
              setTimeout(() => {
                o()
              }, 2000)
            }}
          >
            <div
              style={{
                height: '100px',
                background: 'red',
              }}
            >
              12112
            </div>
          </PullToRefresh>
        </Container>
      </Container>
    </App>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
