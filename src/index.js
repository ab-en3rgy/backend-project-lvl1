import question from './cli.js';

const logic = (gametask, task) => {
  let successCount = 0;
  console.log('Welcome to the Brain Games!');
  const name = question('May I have your name?');
  console.log(`Hello, ${name}`);
  console.log(gametask);
  while (successCount < 3) {
    const [result, rightAnswer, answer] = task();
    if (result) {
      successCount += 1;
      console.log('Correct');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations ${name}!`);
  return;
};

export default logic;
