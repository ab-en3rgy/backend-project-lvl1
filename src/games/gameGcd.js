import question from '../cli.js';
import logic from '../index.js';
import getRandom from '../getRandom.js';

export default () => {
  const gametask = 'Find the greatest common divisor of given numbers.';

  const findGreatCommonDivisor = (a, b) => {
    let maxDivisor = 0;
    for (let i = 1; i <= a; i += 1) {
      if (a % i === 0 && b % i === 0) {
        maxDivisor = i;
      }
    }
    return maxDivisor;
  };

  const task = () => {
    const a = getRandom(10) + 1;
    const b = getRandom(10) + 1;
    console.log(`Question: ${a} ${b}`);
    const answer = question('Your answer:');
    const rightAnswer = findGreatCommonDivisor(a, b);
    const check = rightAnswer.toString() === answer.toString();
    return [check, rightAnswer, answer];
  };
  return logic(gametask, task);
};
