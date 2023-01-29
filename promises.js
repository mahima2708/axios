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
        const error= false;
        if(!error){
            resolve();
        }
        else
        {
            reject('error: something went wrong');
        }
    },700);
});
}

function deletePost(post){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
        
            if(posts.pop()!=undefined){
                resolve();
            }
            else{
                reject("Error:Array is empty");
            }
           
        
        },1000);
    });
}
createPost({title: 'post three', body: 'this is post three'}).then(getPosts);
 deletePost({title: 'post three', body: 'this is post three'}).then(getPosts);
 deletePost({title: 'post two', body: 'this is post two'}).then(getPosts);
 deletePost({title: 'post one', body: 'this is post one'}).then(getPosts);
 setTimeout(()=>{
    createPost({title: 'post four', body: 'this is post four'}).then(getPosts); 
},3000);
setTimeout(()=>{
    deletePost({title: 'post four', body: 'this is post four'}).then(getPosts);
},4000);
deletePost({title: 'post three', body: 'this is post three'}).then(getPosts).catch(err=> console.log(err));

