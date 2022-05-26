import question from '../cli.js';
import logic from '../index.js';
import getRandom from '../getRandom.js';

export default () => {
  const gametask = 'What number is missing in the progression?';
  const generateProgression = () => {
    const firstNumber = getRandom(100);
    const randomNumber = getRandom(10) + 1;
    const progressionLength = getRandom(5) + 5;
    const progression = [firstNumber];
    for (let i = 1; i < progressionLength; i += 1) {
      progression.push(progression[i - 1] + randomNumber);
    }
    return progression;
  };
  const task = () => {
    const progression = generateProgression();
    const randomPos = getRandom(progression.length - 1);
    const rightAnswer = progression[randomPos];
    progression[randomPos] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    const answer = question('Your answer:');
    const check = answer.toString() === rightAnswer.toString();
    return [check, rightAnswer, answer];
  };
  return logic(gametask, task);
};
