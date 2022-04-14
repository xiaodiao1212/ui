import { ReactNode } from 'react';
import { Col, Container, Row } from './build';
export type APIs = {
  attributes: ReactNode;
  type: ReactNode;
  acceptedValues: ReactNode;
  description: ReactNode;
  defaultValue: ReactNode;
}[];
const Td = ({ children }: any) => (
  <Col flex={1} py='1em' px='4px'>
    {children}
  </Col>
);
export default ({ apis }: { apis: APIs }) => {
  return (
    <Container>
      <Row
        py='1em'
        px='.5em'
        co={{
          background: '#f4f7f8',
        }}>
        <Td>Attribute</Td>
        <Td>Type</Td>
        <Td>Accepted values</Td>
        <Td>Description</Td>
        <Td>Default</Td>
      </Row>
      {apis.map((v, i) => (
        <Row>
          <Td>{v.attributes}</Td>
          <Td>{v.type}</Td>
          <Td>{v.acceptedValues}</Td>
          <Td>{v.description}</Td>
          <Td>{v.defaultValue}</Td>
        </Row>
      ))}
    </Container>
  );
};
