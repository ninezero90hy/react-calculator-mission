import CalculatorButton from '../Button';
import SpecialButton from '../SpecialButton';
import { OPERATOR, SPECIAL_BUTTON } from '../../util/buttons';
import styled from 'styled-components';
import { useState } from 'react';

const RESULT = 'RESULT';
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
  return (Math.round(v * 100000) / 100000)
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}

function isCurrentTermFull(result) {
  return result.length === 9;
}

function divide(firstTerm, secondTerm) {
  return Number(firstTerm) / Number(secondTerm);
}

function multiply(firstTerm, secondTerm) {
  return Number(firstTerm) * Number(secondTerm);
}

function add(firstTerm, secondTerm) {
  return Number(firstTerm) + Number(secondTerm);
}

function subtract(firstTerm, secondTerm) {
  return Number(firstTerm) - Number(secondTerm);
}

function modulo(firstTerm, secondTerm) {
  return Number(firstTerm) % Number(secondTerm);
}

function isDivision(operator) {
  return operator === OPERATOR.DIVIDE;
}

function isMultiplication(operator) {
  return operator === OPERATOR.MULTIPLY;
}

function isModulo(operator) {
  return operator === OPERATOR.MODULO;
}

function isSubtraction(operator) {
  return operator === OPERATOR.SUBTRACT;
}

function isAddition(operator) {
  return operator === OPERATOR.ADD;
}

export default function Calculator() {
  const [result, updateResult] = useState('');
  const [currentTerm, updateCurrentTerm] = useState('');
  const [operator, updateOperator] = useState('');

  function calculate(operator, singleTerm, result) {
    let total = result;
    const secondTerm = result || singleTerm;

    if (isDivision(operator)) {
      total = divide(singleTerm, secondTerm);
    }

    if (isMultiplication(operator)) {
      total = multiply(singleTerm, secondTerm);
    }

    if (isModulo(operator)) {
      total = modulo(singleTerm, secondTerm);
    }

    if (isSubtraction(operator)) {
      total = subtract(singleTerm, secondTerm);
    }

    if (isAddition(operator)) {
      total = add(singleTerm, secondTerm);
    }

    updateResult('');
    updateCurrentTerm(total);
    updateOperator('');
  }

  function clearEquation() {
    updateResult('');
    updateCurrentTerm('');
    updateOperator('');
  }

  function onClickOperator(v, result) {
    updateOperator(v);
    if (result !== '') {
      updateResult('');
      updateCurrentTerm(result);
    }
  }

  function onClickNumber(v, result) {
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

  return (
    <>
      <Display id={RESULT}>
        {numberWithThousandSeparator(result || currentTerm)}
      </Display>
      <TopButtons>
        <SpecialButton
          valueAs={SPECIAL_BUTTON.CLEAR}
          onClick={() => clearEquation()}></SpecialButton>
        <SpecialButton
          valueAs={OPERATOR.MODULO}
          onClick={(v) => onClickOperator(v, result)}></SpecialButton>
        <SpecialButton
          valueAs={OPERATOR.DIVIDE}
          onClick={(v) => onClickOperator(v, result)}></SpecialButton>
      </TopButtons>
      <MiddleButtons>
        <CalculatorButton
          valueAs={7}
          onClick={(v) => onClickNumber(v, result)}></CalculatorButton>
        <CalculatorButton
          valueAs={8}
          onClick={(v) => onClickNumber(v, result)}></CalculatorButton>
        <CalculatorButton
          valueAs={9}
          onClick={(v) => onClickNumber(v, result)}></CalculatorButton>
        <SpecialButton
          valueAs={OPERATOR.MULTIPLY}
          onClick={(v) => onClickOperator(v, result)}></SpecialButton>
        <CalculatorButton
          valueAs={4}
          onClick={(v) => onClickNumber(v, result)}></CalculatorButton>
        <CalculatorButton
          valueAs={5}
          onClick={(v) => onClickNumber(v, result)}></CalculatorButton>
        <CalculatorButton
          valueAs={6}
          onClick={(v) => onClickNumber(v, result)}></CalculatorButton>
        <SpecialButton
          valueAs={OPERATOR.SUBTRACT}
          onClick={(v) => onClickOperator(v, result)}></SpecialButton>
        <CalculatorButton
          valueAs={1}
          onClick={(v) => onClickNumber(v, result)}></CalculatorButton>
        <CalculatorButton
          valueAs={2}
          onClick={(v) => onClickNumber(v, result)}></CalculatorButton>
        <CalculatorButton
          valueAs={3}
          onClick={(v) => onClickNumber(v, result)}></CalculatorButton>
        <SpecialButton
          valueAs={OPERATOR.ADD}
          onClick={(v) => onClickOperator(v, result)}></SpecialButton>
      </MiddleButtons>
      <BottomButtons>
        <CalculatorButton
          valueAs={0}
          onClick={(v) => onClickNumber(v, result)}></CalculatorButton>
        <SpecialButton
          valueAs={SPECIAL_BUTTON.EQUAL}
          onClick={() =>
            calculate(operator, currentTerm, result)
          }></SpecialButton>
      </BottomButtons>
    </>
  );
}
