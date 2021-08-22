
//  how to take a property from a Object.its called destructure

// const person = { name:'jack william', age:17,job:'facebooker',gfName:'ema watson',phone:'01879473811',friends:['tom','khan','yard']}
//  const { phone,name,job } = person;
//  console.log(name,phone,job)

// how to take Array element
// const friends = ['sakin','sakib','khan'];
// const [...otherN] = friends;
// console.log(otherN)


// In the bottom this examle is object into object
const cow ={
name:'ox',info:{
    nation:'female',
    leg:'four'
}
}
const { nation ,leg } = cow.info;
const { name } = cow;
console.log(nation,leg,name);