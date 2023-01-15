const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log(first, second);

// flag = 'a' -> Append the file
writeFileSync('./content/result-sync.text', `here is the result : ${first}, ${second}`,{flag:'a'})


console.log('done with the tsk');
console.log('starting with next one');