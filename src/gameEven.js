import question from './cli.js';

export default () => {
  const maxSuccessCounts = 3;
  let successCounts = 0;
  // получаем случайное число для вопроса
  function getRandom() {
    return Math.floor(Math.random() * 100 + 1);
  }
  // функция которая переносит к следующему вопросу
  function nextNumber() {
    const num = getRandom();
    console.log(`Question: ${num}`);
    const answer = question('Your answer: ');
    check(num, answer);
  }
  // функция проверяет, чётность числа и верность ответа пользователя.
  function check(number, str) {
    const isEven = (number) => number % 2 === 0 ? answerStr.Yes : answerStr.No;
    if (isEven(number) === str) {
      successCounts += 1;
      console.log('Correct!');
    } else {
      console.log(`'${str}' is wrong answer ;(. Correct answer was '${isEven(number)}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    if (successCounts === maxSuccessCounts) {
      console.log(`Congratulations ${name}!`);
      return null;
    }
    return nextNumber();
  }
  // Объект для проверки верности ответа
  const answerStr = {
    Yes: 'yes',
    No: 'no',
  };
  console.log('Welcome to the Brain Games!');
  const name = question('May I have your name?');
  console.log(`Hi ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  nextNumber();
};
