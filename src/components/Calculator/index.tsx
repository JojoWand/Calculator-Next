import { Component, ReactNode } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
  max-width: 220px;
  min-width: 220px;
  margin: auto;
  margin-top: 25px;
  box-shadow: 0px 0px 2px 2px #00000050;
`;
const Visor = styled.span`
  display: flex;
  font-size: 32px;
  font-family: 'Roboto';
  font-weight: 300;

  align-self: center;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0px 5px;
  height: 62px;

  background: ${(props) => props.theme.colors.primary};
  filter: brightness(1.1);
`;
const Clear = styled.button`
  display: inline-block;
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 300;

  align-self: center;

  width: 100%;
  padding: 0px 5px;
  height: 31px;

  border: none;
  background: ${(props) => props.theme.colors.secondary};

  filter: brightness(1.1);
  color: ${(props) => props.theme.colors.text};
  text-transform: uppercase;
  &:active {
    filter: brightness(0.9);
  }
`;
export default class Calculator extends Component<
  {},
  {
    total: string;
    command: string;
    strToCompute: string;
    lastComputed: string;
    floating: boolean;
  }
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      total: '0',
      command: '+',
      strToCompute: '',
      lastComputed: '0',
      floating: false,
    };
  }
  resetAll = () => {
    this.setState({
      total: '0',
      command: '+',
      strToCompute: '',
      lastComputed: '0',
      floating: false,
    });
  };
  resetStrToCompute = () => {
    this.setState({ strToCompute: '', floating: false });
  };
  updateStrToCompute = (value: string) => {
    const { strToCompute, floating } = this.state;
    if (value == '.') {
      if (floating) {
        return;
      }
      this.setState({ floating: true });
    }
    const newStr = strToCompute + value;
    this.setState({ strToCompute: newStr });
  };
  handleCommand = (value: string) => {
    const { strToCompute } = this.state;
    if (!strToCompute) {
      if (value != '=') {
        this.setState({ command: value });
      } else {
        const { lastComputed, total, command } = this.state;
        const newTotal = eval(total + command + lastComputed);
        console.log(`New Total ${newTotal}`);
        this.setState({ total: newTotal.toString() });
        this.resetStrToCompute();
      }
      return;
    }
    if (strToCompute == '.') {
      return;
    }
    const { total, command } = this.state;
    const newTotal = eval(total + command + strToCompute);
    this.setState({ total: newTotal.toString() });
    this.resetStrToCompute();
    if (value != '=') {
      this.setState({ command: value, lastComputed: strToCompute });
    }
  };
  render(): JSX.Element {
    const { strToCompute, total, command, lastComputed } = this.state;
    return (
      <Container>
        <Visor>
          <span>{command}</span>
          <span>{strToCompute || total}</span>
        </Visor>
        <Clear onClick={this.resetAll}>Clear</Clear>
        <Button onClick={this.updateStrToCompute} value="7" />
        <Button onClick={this.updateStrToCompute} value="8" />
        <Button onClick={this.updateStrToCompute} value="9" />
        <Button onClick={this.handleCommand} isOption value="+" />
        <Button onClick={this.updateStrToCompute} value="4" />
        <Button onClick={this.updateStrToCompute} value="5" />
        <Button onClick={this.updateStrToCompute} value="6" />
        <Button onClick={this.handleCommand} isOption value="-" />
        <Button onClick={this.updateStrToCompute} value="1" />
        <Button onClick={this.updateStrToCompute} value="2" />
        <Button onClick={this.updateStrToCompute} value="3" />
        <Button onClick={this.handleCommand} isOption value="/" />
        <Button onClick={this.updateStrToCompute} isOption value="." />
        <Button onClick={this.updateStrToCompute} value="0" />
        <Button onClick={this.handleCommand} isEqual value="=" />
        <Button onClick={this.handleCommand} isOption value="*" />
      </Container>
    );
  }
}
