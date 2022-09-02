import APITable, { APIs } from './common/APITable';
import { NavBar, Container } from '../build';
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
const NavBarExamples = () => {
  return (
    <Container pa='1em'>
      <Example title='Default' desc='Title show app'>
        <NavBar title='Title'></NavBar>
      </Example>

      <APITable apis={apis} />
    </Container>
  );
};

export default NavBarExamples;
