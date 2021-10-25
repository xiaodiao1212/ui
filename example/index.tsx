import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App, Container, Slider, Col, Row, Collapse, Card } from '../src'

const Main = () => {
  return (
    <App>
      <Container>
        <Slider
          min={10}
          step={1}
          max={20}
          onSlide={value => {
            console.log('onSlide', value)
          }}
        />
      </Container>
      <Container>
        <label>
          <input
            onChange={e => {
              console.log(e)
            }}
            type='range'
            min='0'
            max='11'
          />
        </label>
      </Container>
    </App>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
