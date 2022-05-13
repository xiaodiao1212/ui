import APITable, { APIs } from '../APITable';
import { Input, Container, Text } from '../build';
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
      <Example title='Contain & Outlined' desc=''>
        <Input contain={false} />
        <div></div>
        <Input contain={false} outlined />
      </Example>
      <Example title='Default' desc=''>
        <Input placeholder='name' />
      </Example>
      <Example title='Label' desc='Add a label to the input with the property label'>
        <Input label='@Label' placeholder='name' />
      </Example>
      <Example title='icon & extra' desc='Add an icon to the input before or after'>
        <Input icon='@icon' placeholder='name' />
        <div></div>
        <Input contain={false} extra='@icon' placeholder='name' />
      </Example>
      <Example title='message & verify' desc='Add an icon to the input before or after'>
        <Input verify={v => v.length < 10} message='length must < 10!' placeholder='name' />
        <div></div>
        <Input verify={v => v.length < 10} message={<Text blod>{`length must < 10!`}</Text>} placeholder='name' />
        <div></div>
      </Example>
      <Example title='loading' desc='Add an icon to the input before or after'>
        <Input placeholder='name' loading />
        <div></div>
        <Input contain={false} placeholder='name' />
        <div></div>
      </Example>
      <APITable apis={apis} />
    </Container>
  );
};

export default AppBarExamples;
