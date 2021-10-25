import Col from '../Col'
import Row from '../Row'

interface ItemProps {
  k: React.ReactNode
  v: React.ReactNode
}

const Item = ({ k, v }: ItemProps) => {
  return (
    <Row>
      <Col noFlex>{k}</Col>
      <Col autoMargin>{v}</Col>
    </Row>
  )
}
export default Item
