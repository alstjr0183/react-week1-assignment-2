import calculate from './calculate';

const getNewState = ({ currentInput, oldState }) => {
  const { holdingValue, holdingOperator, display } = oldState;
  const calculated = calculate(holdingValue, holdingOperator, display);

  const newState = oldState
    .updateHoldingValue(currentInput, calculated)
    .updateHoldingOperator(currentInput)
    .updateDisplay(currentInput, calculated)
    .updatePreviousInput(currentInput);

  return newState;
};

export default getNewState;
