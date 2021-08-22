// function add(num1,num2)
// {
//     if(num2==undefined)
//     {
//         num2=20;
//     }
//     return num1 + num2;

// }
// const total = add(15);
// console.log(total);



// function add(num1,num2)
// {
//     num2=num2 || 20;
//     return num1 + num2;

// }
// const total = add(15);
// console.log(total);


// for es6 system
function add(num1,num2 = 30)
{
    
    return num1 + num2;

}
const total = add(15,5);//when u give two value of num1 and num2.then it dont take the bakcup value. 
console.log(total);