import { useState } from 'react';
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

function numberWithThousandSeparator(v) {
  return Number(v).toLocaleString();
}

function onClickOperator({
  v,
  updateOperator,
  result,
  updateResult,
  updateCurrentTerm,
}) {
  updateOperator(v);
  if (result !== '') {
    updateResult('');
    updateCurrentTerm(result);
  }
}

function isCurrentTermFull(result) {
  return result.length === 9;
}

function onClickBtn({ v, result, updateResult }) {
  if (isCurrentTermFull(result)) {
    return;
  }
  if (result === '0') {
    if (v === 0) {
      updateResult('0');
      return;
    }
    updateResult(v);
    return;
  }

  updateResult((result += v));
}

function clearEquation(updateResult, updateCurrentTerm, updateOperator) {
  updateResult('');
  updateCurrentTerm('');
  updateOperator('');
}

function calculate(
  operator,
  singleTerm,
  result,
  updateResult,
  updateCurrentTerm,
  updateOperator,
) {
  let total = 0;
  const secondTerm = result || singleTerm;
  switch (operator) {
    case '%':
      total = Number(singleTerm) % Number(secondTerm);
      break;
    case 'X':
      total = Number(singleTerm) * Number(secondTerm);
      break;
    case '+':
      total = Number(singleTerm) + Number(secondTerm);
      break;
    case '-':
      total = Number(singleTerm) - Number(secondTerm);
      break;
    case '/':
      total = Number(singleTerm) / Number(secondTerm);
      break;
    default:
      total = result;
  }
  updateResult('');
  updateCurrentTerm(total);
  updateOperator('');
}

function App() {
  let [result, updateResult] = useState('');
  let [currentTerm, updateCurrentTerm] = useState('');
  let [operator, updateOperator] = useState('');
  return (
    <Container>
      <Display id={RESULT}>
        {numberWithThousandSeparator(result || currentTerm)}
      </Display>
      <TopButtons>
        <CalculatorButton
          special
          valueAs={'AC'}
          onClick={() =>
            clearEquation(updateResult, updateCurrentTerm, updateOperator)
          }></CalculatorButton>
        <CalculatorButton
          special
          valueAs={'%'}
          onClick={(v) =>
            onClickOperator({
              v,
              updateOperator,
              result,
              updateResult,
              updateCurrentTerm,
            })
          }></CalculatorButton>
        <CalculatorButton
          special
          valueAs={'/'}
          onClick={(v) =>
            onClickOperator({
              v,
              updateOperator,
              result,
              updateResult,
              updateCurrentTerm,
            })
          }></CalculatorButton>
      </TopButtons>
      <MiddleButtons>
        <CalculatorButton
          valueAs={7}
          onClick={(v) =>
            onClickBtn({ v, result, updateResult })
          }></CalculatorButton>
        <CalculatorButton
          valueAs={8}
          onClick={(v) =>
            onClickBtn({ v, result, updateResult })
          }></CalculatorButton>
        <CalculatorButton
          valueAs={9}
          onClick={(v) =>
            onClickBtn({ v, result, updateResult })
          }></CalculatorButton>
        <CalculatorButton
          special
          valueAs={'X'}
          onClick={(v) =>
            onClickOperator({
              v,
              updateOperator,
              result,
              updateResult,
              updateCurrentTerm,
            })
          }></CalculatorButton>
        <CalculatorButton
          valueAs={4}
          onClick={(v) =>
            onClickBtn({ v, result, updateResult })
          }></CalculatorButton>
        <CalculatorButton
          valueAs={5}
          onClick={(v) =>
            onClickBtn({ v, result, updateResult })
          }></CalculatorButton>
        <CalculatorButton
          valueAs={6}
          onClick={(v) =>
            onClickBtn({ v, result, updateResult })
          }></CalculatorButton>
        <CalculatorButton
          special
          valueAs={'-'}
          onClick={(v) =>
            onClickOperator({
              v,
              updateOperator,
              result,
              updateResult,
              updateCurrentTerm,
            })
          }></CalculatorButton>
        <CalculatorButton
          valueAs={1}
          onClick={(v) =>
            onClickBtn({ v, result, updateResult })
          }></CalculatorButton>
        <CalculatorButton
          valueAs={2}
          onClick={(v) =>
            onClickBtn({ v, result, updateResult })
          }></CalculatorButton>
        <CalculatorButton
          valueAs={3}
          onClick={(v) =>
            onClickBtn({ v, result, updateResult })
          }></CalculatorButton>
        <CalculatorButton
          special
          valueAs={'+'}
          onClick={(v) =>
            onClickOperator({
              v,
              updateOperator,
              result,
              updateResult,
              updateCurrentTerm,
            })
          }></CalculatorButton>
      </MiddleButtons>
      <BottomButtons>
        <CalculatorButton
          valueAs={0}
          onClick={(v) =>
            onClickBtn({ v, result, updateResult })
          }></CalculatorButton>
        <CalculatorButton
          special
          valueAs={'='}
          onClick={() =>
            calculate(
              operator,
              currentTerm,
              result,
              updateResult,
              updateCurrentTerm,
              updateOperator,
            )
          }></CalculatorButton>
      </BottomButtons>
    </Container>
  );
}

export default App;
