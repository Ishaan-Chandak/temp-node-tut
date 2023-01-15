const {readFile, writeFile} = require('fs');
// since async when we start the task, it offloads it and proceeds further till the task is done 
// that is why the console log of starting new task gets executed first
// not line by line
console.log('start');
readFile('./content/first.txt','utf-8', (err, result) =>{
    if(err){
        console.log(err);
        return ;
    }
    const first = result
    readFile('./content/second.txt','utf-8',(err, result) => {
    if(err){
        console.log(err);
        return ;
    }
    const second = result
    writeFile('./content/result-async.text', `here is the result : ${first}, ${second}`,(err,result) => {
        if(err){
        console.log(err)
        return
        }
    console.log(result)
    console.log('done with the task');
    }
)})
})
console.log('starting next task');
