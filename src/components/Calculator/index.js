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

const DEFAULT_VALUE = '';
const DEFAULT_OPERATOR = DEFAULT_VALUE;
const DEFAULT_CURRENT_TERM = DEFAULT_VALUE;
const DEFAULT_RESULT = DEFAULT_VALUE;

export default function Calculator() {
  const [result, updateResult] = useState(DEFAULT_RESULT);
  const [currentTerm, updateCurrentTerm] = useState(DEFAULT_CURRENT_TERM);
  const [operator, updateOperator] = useState(DEFAULT_OPERATOR);

  function calculate() {
    let total = result;
    const secondTerm = result || currentTerm;

    if (isDivision(operator)) {
      total = divide(currentTerm, secondTerm);
    }

    if (isMultiplication(operator)) {
      total = multiply(currentTerm, secondTerm);
    }

    if (isModulo(operator)) {
      total = modulo(currentTerm, secondTerm);
    }

    if (isSubtraction(operator)) {
      total = subtract(currentTerm, secondTerm);
    }

    if (isAddition(operator)) {
      total = add(currentTerm, secondTerm);
    }

    updateResult(DEFAULT_RESULT);
    updateCurrentTerm(total);
    updateOperator(DEFAULT_OPERATOR);
  }

  function clearEquation() {
    updateResult(DEFAULT_RESULT);
    updateCurrentTerm(DEFAULT_CURRENT_TERM);
    updateOperator(DEFAULT_OPERATOR);
  }

  function isResultInitialValue(result) {
    return DEFAULT_RESULT === result;
  }

  function onClickOperator(operator) {
    updateOperator(operator);
    if (!isResultInitialValue(result)) {
      updateResult(DEFAULT_VALUE);
      updateCurrentTerm(result);
    }
  }

  function onClickNumber(term) {
    if (isCurrentTermFull(result)) {
      return;
    }
    updateResult(result + term);
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
          onClick={(v) => onClickOperator(v)}></SpecialButton>
        <SpecialButton
          valueAs={OPERATOR.DIVIDE}
          onClick={(v) => onClickOperator(v)}></SpecialButton>
      </TopButtons>
      <MiddleButtons>
        <CalculatorButton
          valueAs={7}
          onClick={(v) => onClickNumber(v)}></CalculatorButton>
        <CalculatorButton
          valueAs={8}
          onClick={(v) => onClickNumber(v)}></CalculatorButton>
        <CalculatorButton
          valueAs={9}
          onClick={(v) => onClickNumber(v)}></CalculatorButton>
        <SpecialButton
          valueAs={OPERATOR.MULTIPLY}
          onClick={(v) => onClickOperator(v)}></SpecialButton>
        <CalculatorButton
          valueAs={4}
          onClick={(v) => onClickNumber(v)}></CalculatorButton>
        <CalculatorButton
          valueAs={5}
          onClick={(v) => onClickNumber(v)}></CalculatorButton>
        <CalculatorButton
          valueAs={6}
          onClick={(v) => onClickNumber(v)}></CalculatorButton>
        <SpecialButton
          valueAs={OPERATOR.SUBTRACT}
          onClick={(v) => onClickOperator(v)}></SpecialButton>
        <CalculatorButton
          valueAs={1}
          onClick={(v) => onClickNumber(v)}></CalculatorButton>
        <CalculatorButton
          valueAs={2}
          onClick={(v) => onClickNumber(v)}></CalculatorButton>
        <CalculatorButton
          valueAs={3}
          onClick={(v) => onClickNumber(v)}></CalculatorButton>
        <SpecialButton
          valueAs={OPERATOR.ADD}
          onClick={(v) => onClickOperator(v)}></SpecialButton>
      </MiddleButtons>
      <BottomButtons>
        <CalculatorButton
          valueAs={0}
          onClick={(v) => onClickNumber(v)}></CalculatorButton>
        <SpecialButton
          valueAs={SPECIAL_BUTTON.EQUAL}
          onClick={() => calculate()}></SpecialButton>
      </BottomButtons>
    </>
  );
}
