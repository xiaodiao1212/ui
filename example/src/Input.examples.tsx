import APITable, { APIs } from '../APITable';
import { Input, Container, Text, Spacer, Row, Col } from '../build';
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
      <Example title='Default' desc='默认的input框，伴随着placeholder'>
        <Input placeholder='name' />
      </Example>
      <Example title='Contain' desc='包裹背景的样式'>
        <Input
          contain
          placeholder='name'
          contentStyle={{
            background: 'red',
          }}
        />

        <Input contain placeholder='name' />
      </Example>
      <Example title='Outlined' desc='有边框的样式'>
        <Input
          outlined
          placeholder='name'
          contentStyle={{
            border: '1px solid red',
          }}
        />

        <Input outlined placeholder='name' />
      </Example>

      <Example title='Label' desc='一个显示在input上方的组件'>
        <Input label='UserName:' placeholder='name' contain />
      </Example>

      <Example title='prefix & suffix' desc='input框前后缀组件'>
        <Input contain prefix='+233' placeholder='phone' />

        <Input contain suffix={<i className='bx bx-show'></i>} placeholder='password' />
      </Example>
      <Example title='message & verify' desc='verify设置value校验规则,触发校验后显示message'>
        <Input
          label={'输入大于10个字符触发警告：'}
          verify={v => v.length <= 10}
          message='输入数量必须小于等于10个字符!'
          placeholder='name'
        />

        <Input
          label={'自定义警告样式'}
          verify={v => v.length <= 10}
          message={
            <Text blod color='red'>
              输入数量必须小于等于10个字符!
            </Text>
          }
          placeholder='name'
        />
      </Example>

      <Example title='Closeable' desc='是否可以一键清除(此时suffix会失效)'>
        <Input contain placeholder='name' closable />
      </Example>

      <APITable apis={apis} />
    </Container>
  );
};

export default AppBarExamples;
