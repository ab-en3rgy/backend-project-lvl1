#!/usr/bin/env node
import greet from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = greet();
console.log('Hi ' + name); 