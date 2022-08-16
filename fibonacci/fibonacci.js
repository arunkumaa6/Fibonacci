// fibonacci series

let num=parseInt(prompt('enter the value'));
console.log('value:',num);
let n1=0, n2=1, nextterm;
console.log('fibonacci series:');

for(let i=1;i<=num;i++){
    console.log(n1);
    nextterm=n1+n2;
    n1=n2;
    n2=nextterm;
}
