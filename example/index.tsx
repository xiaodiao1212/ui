import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Demo, App } from '../dist'

const Main = () => {
  const [a, b] = React.useState()
  return (
    <>
      <App>
        <div>{a}</div>
        <Demo step='1' trackColor='#eee' thumbColor='red' thumbHeight={20} onChange={v => b(v)} />
      </App>
    </>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
