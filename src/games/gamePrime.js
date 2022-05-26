import question from '../cli.js';
import logic from '../index.js';
import getRandom from '../getRandom.js';

export default () => {
  const gametask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const answerStr = {
    Yes: 'yes',
    No: 'no',
  };
  const isPrime = (num) => {
    if (num === 1) {
      return answerStr.Yes;
    }
    for (let i = 2; i < num / 2; i += 1) {
      if (num % i === 0) {
        return answerStr.No;
      }
    }
    return answerStr.Yes;
  };
  const task = () => {
    const randomNumber = getRandom(100) + 1;
    console.log(`Question: ${randomNumber}`);
    const answer = question('Your answer:');
    const rightAnswer = isPrime(randomNumber);
    const check = answer.toString() === rightAnswer.toString();
    return [check, rightAnswer, answer];
  };
  return logic(gametask, task);
};
