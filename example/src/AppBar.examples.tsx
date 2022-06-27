import APITable, { APIs } from './common/APITable';
import { AppBar, Container } from '../build';
import Left from './Left';
import Example from './common/Example';
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

      <APITable apis={apis} />
    </Container>
  );
};

export default AppBarExamples;
