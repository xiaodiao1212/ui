/** @jsxImportSource @emotion/react */
import { useThemedCSS, useCSS, useTheme } from '../../styles/css';
import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';
type CenterProps = ComponentBaseProps;

/**
 * A component conveniently centres a child component vertically.
 * ```js
 * <Center>
        <Text>A basic card</Text>
   </Center>
 * ```
 * @param children component need to be centred
 */
const Center = ({ css, children, ...props }: CenterProps) => {
  const theme = useTheme();
  const styles = useCSS({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',

    ...useThemedCSS(theme, css),
  });

  return (
    <div css={styles} {...props}>
      {children}
    </div>
  );
};

export default Center;
