//////////PROMISES
console.log('person1: shows ticket');
console.log('person2: shows ticket');
const  promiseWifeBringingTickets = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve('ticket');
    },3000);
});
const getPopcorn = promiseWifeBringingTickets.then((t)=>{
    console.log('wife: i have tickets');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve,reject)=> resolve(`${t} popcorn`));
});

const getButter= getPopcorn.then((t)=>{
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: i want some butter on my popcorns');
       console.log('husband: i got some butter on popcorn');
       console.log('husband: anything else darling');
       console.log('wife: some colddrinks will be good');
       return new Promise((resolve,reject)=> resolve(`${t} butter`));  
});
 const getColdDrinks= getButter.then((t)=>{
    console.log('husband: here you are got some coldDrink ');
    console.log('wife: lets go we are getting late');
    return new Promise((resolve,reject)=> resolve(`${t} colddrink`));  
   
});

getColdDrinks.then((t)=>console.log(t));

console.log('person4: shows ticket');
console.log('person5: shows ticket');

//// USING ASYNC AWAIT***************************************************

console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async()=>{
    const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('ticket'),3000);
    });

    const getPopcorn= new Promise((resolve,reject)=> resolve(`popcorn`));

    const getButter= new Promise((resolve,reject)=> resolve(`butter`));
    
    const getColdDrinks= new Promise((resolve, reject)=> resolve(`coldDrink`));

    let ticket= await promiseWifeBringingTickets;
    console.log(`wife: i have ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;
    console.log(`husband: i have some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorns');

    let butter= await getButter;
    
    console.log(`husband: i got some ${butter} on popcorn`);
    console.log('husband: anything else darling');
    console.log('wife: some colddrinks will be good');

    let cold_Drink= await getColdDrinks;
    console.log(`husband: here you are got some ${cold_Drink} `);
    console.log('wife: lets go we are getting late');

    return ticket;
}
preMovie().then((m)=> console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
