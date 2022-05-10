import APITable, { APIs } from '../APITable';
import { AppBar, Container } from '../build';
import Left from '../Left';
import Example from '../Example';
const apis: APIs = [
  {
    attributes: 'title',
    type: 'React.ReactNode',
    acceptedValues: '-',
    description: '',
    defaultValue: '-',
  },
];
const AppBarExamples = () => {
  return (
    <Container pa='1em'>
      <Example title='Default' desc='Title show app'>
        <AppBar title='Title'></AppBar>
      </Example>

      <h1 style={{ marginBottom: '1em' }}>Props</h1>
      <APITable apis={apis} />
    </Container>
  );
};

export default AppBarExamples;
