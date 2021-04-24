import question from '../cli.js';
import logic from '../index.js';
import getRandom from '../getRandom.js';

export default () => {
  const gametask = 'What is the result of the expression?';
  const operands = ['+', '-', '*'];
  const executeExpression = (a, b, operation) => {
    switch (operation) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      default: return null;
    }
  };

  const task = () => {
    const a = getRandom(10);
    const b = getRandom(10);
    const operation = operands[getRandom(operands.length)];
    console.log(`Question: ${a} ${operation} ${b}`);
    const answer = question('Your answer: ');
    const rightAnswer = executeExpression(a, b, operation);
    const check = answer.toString() === rightAnswer.toString();
    return [check, rightAnswer, answer];
  };

  return logic(gametask, task);
};
