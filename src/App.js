import styled from 'styled-components';
import CalculatorButton from './Button';

const RESULT = 'RESULT';

const Container = styled.div`
  max-width: 400px;
  margin: 10vh auto 0 auto;
`;

const Display = styled.div`
  text-align: right;
  height: 70px;
  line-height: 70px;
  padding: 16px 8px;
  border: 1px solid black;
  background: black;
  color: white;
  font-size: 50px;
`;

const Buttons = styled.div`
  display: grid;
`;

const TopButtons = styled(Buttons)`
  grid-template-columns: 2fr 1fr 1fr;
`;

const MiddleButtons = styled(Buttons)`
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const BottomButtons = styled(Buttons)`
  grid-template-columns: 3fr 1fr;
`;

function doSomething(v) {
  console.log(v);
}

function App() {
  return (
    <Container>
      <Display id={RESULT}>54,000</Display>
      <TopButtons>
        <CalculatorButton
          special
          valueAs={'AC'}
          onClick={(v) => doSomething(v)}></CalculatorButton>
        <CalculatorButton
          special
          valueAs={'%'}
          onClick={(v) => doSomething(v)}></CalculatorButton>
        <CalculatorButton
          special
          valueAs={'/'}
          onClick={(v) => doSomething(v)}></CalculatorButton>
      </TopButtons>
      <MiddleButtons>
        <CalculatorButton
          valueAs={7}
          onClick={(v) => doSomething(v)}></CalculatorButton>
        <CalculatorButton
          valueAs={8}
          onClick={(v) => doSomething(v)}></CalculatorButton>
        <CalculatorButton
          valueAs={9}
          onClick={(v) => doSomething(v)}></CalculatorButton>
        <CalculatorButton
          special
          valueAs={'X'}
          onClick={(v) => doSomething(v)}></CalculatorButton>
        <CalculatorButton
          valueAs={4}
          onClick={(v) => doSomething(v)}></CalculatorButton>
        <CalculatorButton
          valueAs={5}
          onClick={(v) => doSomething(v)}></CalculatorButton>
        <CalculatorButton
          valueAs={6}
          onClick={(v) => doSomething(v)}></CalculatorButton>
        <CalculatorButton
          special
          valueAs={'-'}
          onClick={(v) => doSomething(v)}></CalculatorButton>
        <CalculatorButton
          valueAs={1}
          onClick={(v) => doSomething(v)}></CalculatorButton>
        <CalculatorButton
          valueAs={2}
          onClick={(v) => doSomething(v)}></CalculatorButton>
        <CalculatorButton
          valueAs={3}
          onClick={(v) => doSomething(v)}></CalculatorButton>
        <CalculatorButton
          special
          valueAs={'+'}
          onClick={(v) => doSomething(v)}></CalculatorButton>
      </MiddleButtons>
      <BottomButtons>
        <CalculatorButton
          valueAs={0}
          onClick={(v) => doSomething(v)}></CalculatorButton>
        <CalculatorButton
          special
          valueAs={'='}
          onClick={(v) => doSomething(v)}></CalculatorButton>
      </BottomButtons>
    </Container>
  );
}

export default App;
