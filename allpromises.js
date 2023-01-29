
const posts =[
    {title: 'post one', body:'this is post one'},
    {title: 'post two', body:'this is post two'}
]

function getPosts(){
    setTimeout(()=> {
        let output = '';
        posts.forEach((post,index)=> {
            output += `<li>${post.title} </li>`
        });
       document.body.innerHTML = output;
    },200);
}
function createPost(post){
return new Promise((resolve, reject) => {
    setTimeout(()=> {
        posts.push(post);
        //console.log(new Date().getTime());
        const title1 = post.title;
        const error= false;
        if(!error){
            resolve();
        }
        else
        {
            reject('error: something went wrong');
        }
    },1000);
});
}

const updateLastUserActivityTime = new Promise((resolve, reject) => {
    setTimeout(() => {
      const lastActivityTime = new Date().getTime();
      
      resolve(lastActivityTime);
    }, 1000);
  });
  
  Promise.all([createPost({title: 'post five', body: 'this is post five'}).then(getPosts),updateLastUserActivityTime])
.then(values => {
    console.log('Last Activity  : ', values);
  })
  .catch(error => {
    console.error(error);
  });

 