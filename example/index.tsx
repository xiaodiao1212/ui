import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App, Banner } from '../dist'

const Main = () => {
  const [a, b] = React.useState(false)
  return (
    <App>
      <Banner>1</Banner>
    </App>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
