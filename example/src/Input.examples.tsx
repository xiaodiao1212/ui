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
      <Example title='Contain' desc=''>
        <Input
          contain
          placeholder='name'
          contentStyle={{
            background: 'red',
          }}
        />
        <div
          style={{
            margin: '1em 0',
          }}></div>
        <Input contain placeholder='name' />
      </Example>
      <Example title='Outlined' desc=''>
        <Input
          outlined
          placeholder='name'
          contentStyle={{
            border: '1px solid red',
          }}
        />
        <div
          style={{
            margin: '1em 0',
          }}></div>
        <Input outlined placeholder='name' />
      </Example>

      <Example title='Label' desc='Add a label to the input with the property label'>
        <Input label='UserName:' placeholder='name' contain />
      </Example>

      <Example title='prefix & suffix' desc='Add an icon to the input before or after'>
        <Input contain prefix='+233' placeholder='phone' />
        <div></div>
        <Input contain suffix={<i className='bx bx-show'></i>} placeholder='password' />
      </Example>
      <Example title='message & verify' desc=''>
        {'输入>10触发警告'}
        <Input verify={v => v.length < 10} message='length must < 10!' placeholder='name' />
        <div></div>
        {'输入<10触发警告'}
        <Input verify={v => v.length > 10} message={<Text blod>{`length must > 10!`}</Text>} placeholder='name' />
      </Example>
      <Example title='loading' desc='Add an icon to the input before or after'>
        <Input placeholder='name' loading />
      </Example>
      <APITable apis={apis} />
    </Container>
  );
};

export default AppBarExamples;
