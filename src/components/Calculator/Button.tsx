import styled from 'styled-components';

interface IButtonProps {
  isOption?: boolean;
  isEqual?: boolean;
  onClick?: any;
  value?: string;
}
const Button = styled.button<IButtonProps>`
  display: inline-block;

  font-size: 26px;
  font-family: 'Quicksand';
  font-weight: 300;

  width: 55px;
  height: 62px;

  border: 1px solid #00000040;

  color: ${(props) => props.theme.colors.text};
  background: ${(props) =>
    !props.isOption
      ? props.isEqual
        ? props.theme.colors.extra
        : props.theme.colors.primary
      : props.theme.colors.secondary};
  &:active {
    filter: brightness(0.9);
  }
`;

const CalculatorButton: React.FC<IButtonProps> = (props) => (
  <Button
    isOption={props.isOption}
    isEqual={props.isEqual}
    onClick={props.onClick.bind(this, props.value)}
  >
    {props.value}
  </Button>
);
export default CalculatorButton;
