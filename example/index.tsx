import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App, Chip } from '../dist'

const Main = () => {
  const [a, b] = React.useState(false)
  return (
    <App>
      <Chip>12323</Chip>
    </App>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
