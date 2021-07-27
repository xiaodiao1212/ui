import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App, Container, Button, PullToRefresh, List } from '../src'
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const Main = () => {
  return (
    <App>
      <Container fullScreen>
        <PullToRefresh
          onRefresh={(over) => {
            console.log('@onRefresh')

            setTimeout(() => {
              over()
            }, 1000)
          }}
        >
          <List
            style={{
              background: 'blanchedalmond',
            }}
            onScrollToBottom={(handleScrollToBottomOver) => {
              console.log('@!4214')
            }}
          >
            {[...data, ...data].map((v) => (
              <div style={{ marginBottom: '4em' }}>{v}</div>
            ))}
          </List>
        </PullToRefresh>
      </Container>
    </App>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
