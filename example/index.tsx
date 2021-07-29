import { useState } from 'react'
import * as ReactDOM from 'react-dom'
import { App, Container, Divider, List, Loading, Card, Carousel, Collapse, PullToRefresh } from '../src'
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const Main = () => {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  return (
    <App>
      <Container fullScreen scroll>
        <PullToRefresh
          onPull={() => {
            console.log('@!4421')
          }}
          onRefresh={(o) => {
            setTimeout(() => {
              o()
            }, 2000)
          }}
          refreshLoading={
            <div style={{ background: 'red', textAlign: 'center' }}>
              1313
              <div>fasfafs</div>
            </div>
          }
        >
          <List onScrollToBottom={(o) => {}}>
            {data.map((v) => (
              <div style={{ paddingBottom: '4em', background: 'red' }}>{v}</div>
            ))}
          </List>
        </PullToRefresh>
      </Container>
    </App>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
