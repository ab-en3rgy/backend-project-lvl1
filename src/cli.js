import readlineSync from 'readline-sync';

export const greet = () => readlineSync.question('May I have your name? ');
export const question = (question) => readlineSync.question(`${question} `);