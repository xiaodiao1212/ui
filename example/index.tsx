import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Demo, App, Breadcrumbs } from '../dist'

const Main = () => {
  const [a, b] = React.useState()
  return (
    <>
      <App>
        <Breadcrumbs items={[{ title: '1' }, { title: '2' }, { title: '3' }]} co={t => ({ color: t.color.primary })} />
        <div>{a}</div>
        <Demo step='1' trackColor='#eee' thumbColor='red' thumbHeight={20} onChange={v => b(v)} />
      </App>
    </>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
