#!/usr/bin/env node


import program from 'commander';
import colors from 'colors';

program
.version('2.0.0')
.description('Archtools, a set tools that will bring your react-native productivity to the next level')
.command('generate [name]', 'Create a new react-native component').alias('g')
.parse(process.argv);

console.log();
console.log(' Arch ☕ '.rainbow); // ARCH rainbow 
console.log();

