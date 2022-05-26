import readlineSync from "readline-sync";

const helloFoo = () => {
    let userName = readlineSync.question('May I have your name?');
    console.log(`Hello, ${userName}`);
}

export { helloFoo };