import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  App,
  Container,
  Upload,
  Switch,
  Popover,
  Card,
  AppBar,
  Button,
  BottomNavigation,
  useCustomTheme,
  List,
} from '../src'

const Main = () => {
  const [on, setOn] = React.useState(false)
  const data = [1, 2, 3, 4, 5, 9, 6, 7, 8]
  return (
    <App>
      <Container fullScreen relative noPadding>
        <List>
          {data.map((v) => (
            <List.Item swipe>{v}</List.Item>
          ))}
        </List>
      </Container>
    </App>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
