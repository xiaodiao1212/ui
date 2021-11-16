import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App, Divider } from '../dist'

const Main = () => {
  const [a, b] = React.useState(1)
  return (
    <>
      <App>
        <Divider dashed />
      </App>
    </>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
