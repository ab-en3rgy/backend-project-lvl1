import readlineSync from 'readline-sync';
 
const greet = () => readlineSync.question('May I have your name? ');
export default greet;