// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const preMovie = async()=>{
//     const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve('ticket'),3000);
//     });

//     const getPopcorn= new Promise((resolve,reject)=> resolve(`popcorn`));

//     const getCandy= new Promise((resolve,reject)=> resolve(`candy`));
    
//     const getCoke= new Promise((resolve, reject)=> resolve(`coke`));

//     let ticket= await promiseWifeBringingTickets;
    
//     let [popcorn,candy,coke] = await Promise.all([getPopcorn,getCandy,getCoke]);
//     console.log(`${popcorn}, ${candy} ${coke}`);
//     return ticket;
// }
// preMovie().then((m)=> console.log(`person3: shows ${m}`));

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');


//********************** handling errors*********************************8
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async()=>{
    const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
        setTimeout(()=> reject('ticket'),3000);
    });
    let ticket
try{
     ticket= await promiseWifeBringingTickets;
} catch(e){
    ticket= 'sad face';

}
   
    return ticket;
}
preMovie().then((m)=> console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');

