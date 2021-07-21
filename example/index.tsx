import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from '../src/index'

const Main = () => {
  return (
    <div>
      <App />
    </div>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
