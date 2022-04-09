import { Col, Row } from './build';
export default ({ children }: any) => {
  return (
    <Row justifyContent='center' gap='1em'>
      {children}
    </Row>
  );
};
