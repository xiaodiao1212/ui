type SpacerProps = {
  vertical?: boolean;
  margin?: string;
};
/**
 * Spacer 是一个基本而又通用的间隔组件，用于分配父子组件之间的剩余宽度。
 * 当一个 Spacer 放置在子组件之前或之后时，组件将推到其容器的左右两侧。
 * 当多个组件之间使用多个 Spacer 时，剩余的宽度将均匀地分布在每个 Spacer 之间。
 */
const Spacer = ({ vertical = false, margin = '1em' }: SpacerProps) => (
  <div
    style={{
      margin: vertical ? margin + ' 0' : '',
      flex: 'auto',
    }}
  />
);

export default Spacer;
