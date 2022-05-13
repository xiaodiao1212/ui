import APITable, { APIs } from '../APITable';
import { Input, Container } from '../build';
import Left from '../Left';
import Example from '../Example';
const apis: APIs = [
  {
    attributes: 'placeholder',
    type: 'React.ReactNode',
    acceptedValues: '-',
    description: '',
    defaultValue: '-',
  },
  {
    attributes: 'label',
    type: 'React.ReactNode',
    acceptedValues: '-',
    description: '',
    defaultValue: '-',
  },
  {
    attributes: 'extra',
    type: 'React.ReactNode',
    acceptedValues: '-',
    description: '',
    defaultValue: '-',
  },
  {
    attributes: 'icon',
    type: 'React.ReactNode',
    acceptedValues: '-',
    description: '',
    defaultValue: '-',
  },
];
const AppBarExamples = () => {
  return (
    <Container pa='1em'>
      <Example title='Default' desc=''>
        <Input placeholder='name' />
      </Example>
      <Example title='Label' desc='Add a label to the input with the property label'>
        <Input label='@Label' placeholder='name' />
      </Example>
      <Example title='icon & extra' desc='Add an icon to the input before or after'>
        <Input icon='@icon' placeholder='name' />
        <div></div>
        <Input extra='@icon' placeholder='name' />
      </Example>

      <APITable apis={apis} />
    </Container>
  );
};

export default AppBarExamples;
