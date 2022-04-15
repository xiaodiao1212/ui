import APITable, { APIs } from '../APITable';
import { Swiper, Container } from '../build';
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
const SwiperExamples = () => {
  return (
    <Container pa='1em'>
      <Example
        title='Default'
        desc='The Link component allows you to easily customize anchor elements with your theme colors and indicator
      styles.'>
        <Swiper indicator={e=>{}}>
          {[1, 2, 3, 4].map(v => (
            <Swiper.Item>{1}</Swiper.Item>
          ))}
          <Swiper.IndicatorSlot>
            {(v1,v2,3)=><div></div>}
          </Swiper.IndicatorSlot>
        </Swiper>
      </Example>

      <h1 style={{ marginBottom: '1em' }}>Props</h1>
      <APITable apis={apis} />
    </Container>
  );
};

export default SwiperExamples;
