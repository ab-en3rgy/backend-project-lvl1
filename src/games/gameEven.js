import question from '../cli.js';
import getRandom from '../getRandom.js';
import logic from '../index.js';

export default () => {
  const gametask = 'Answer "yes" if the number is even, otherwise answer "no".';
  const answerStr = {
    Yes: 'yes',
    No: 'no',
  };

  const isEven = (number) => (number % 2 === 0 ? answerStr.Yes : answerStr.No);

  const task = () => {
    const num = getRandom(100);
    console.log(`Question: ${num}?`);
    const answer = question('Your answer:');
    const rightAnswer = isEven(num);
    const check = answer === rightAnswer;
    return [check, rightAnswer, answer];
  };

  return logic(gametask, task);
};
