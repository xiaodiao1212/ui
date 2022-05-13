import APITable, { APIs } from '../APITable';
import { Link, Container } from '../build';
import Left from '../Left';
import Example from '../Example';
const apis: APIs = [
  {
    attributes: 'title',
    type: 'React.ReactNode',
    acceptedValues: '-',
    description: "cell's title or the key ",
    defaultValue: '-',
  },
  {
    attributes: 'extra',
    type: 'React.ReactNode',
    acceptedValues: '-',
    description: "cell's extra info or the value",
    defaultValue: '-',
  },
];
const LinkExamples = () => {
  return (
    <Container pa='1em'>
      <Example
        title='Default'
        desc='The Link component allows you to easily customize anchor elements with your theme colors and indicator
      styles.'>
        <Left>
          <Link to='#'>default</Link>

          <Link to='#' indicatorAction='none'>
            no indicator
          </Link>
        </Left>
      </Example>

      <APITable apis={apis} />
    </Container>
  );
};

export default LinkExamples;
