
// concat array process no:-1

// const ages = [12,12,34,45,56,60];
// const ages2 = [23,22,24,25];
// const ages3 = [11,13,14,12,15];
// const allAges = ages.concat(ages2).concat([5]).concat(ages3);
// console.log(allAges);

// concat array process no:-2(es-6)
// const ages = [12,12,34,45,56,60];
// const ages2 = [23,22,24,25];
// const ages3 = [11,13,14,12,15];
// const allAges = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges);


// find maximum value in the number process no 1

const memeber = 400;
const chairman = 600;
const socib = 300;
const maximum = Math.max(memeber,chairman,socib);  
console.log(maximum);
//find maximum value in a array
const bugget = [200,400,500,800];
const maximum2 = Math.max(...bugget);
console.log(maximum2);