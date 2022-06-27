import { Col, Row } from '../build';
export default ({ children }: any) => {
  return (
    <Row justifyContent='start' gap='1em'>
      {children}
    </Row>
  );
};
