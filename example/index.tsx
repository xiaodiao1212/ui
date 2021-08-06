import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App, Container, Text, Switch, Popover, Card, AppBar, Button, BottomNavigation, useCustomTheme } from '../src'

const Main = () => {
  const [on, setOn] = React.useState(false)
  return (
    <App>
      <Container scroll fullScreen relative noPadding>
        <AppBar>124</AppBar>
        <Switch on={on} onChange={() => setOn((v) => !v)} />
        <Popover>
          <Popover.Content>
            <Card>133</Card>
          </Popover.Content>
          <Button>
            <Text dark>242424</Text>
          </Button>
        </Popover>
        <BottomNavigation absolute></BottomNavigation>
      </Container>
    </App>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
