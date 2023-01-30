(async () => {
    const posts = [
        {title: 'post one', body:'this is post one'},
        {title: 'post two', body:'this is post two'}
    ];

    async function getPosts(){
        await new Promise((resolve) => setTimeout(resolve, 200));
        let output = '';
        posts.forEach((post,index)=> {
            output += `<li>${post.title} </li>`
        });
        document.body.innerHTML = output;
    }

    async function createPost(post){
        await new Promise((resolve, reject) => {
            setTimeout(()=> {
                posts.push(post);
                const error= false;
                if(!error){
                    resolve();
                }
                else
                {
                    reject('error: something went wrong');
                }
            }, 700);
        });
    }

    async function deletePost(post){
        await new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(posts.pop() !== undefined){
                    resolve();
                }
                else{
                    reject("Error:Array is empty");
                }
            }, 1000);
        });
    }

    await createPost({title: 'post three', body: 'this is post three'});
    await getPosts();
    await deletePost({title: 'post three', body: 'this is post three'});
    await getPosts();
    await deletePost({title: 'post two', body: 'this is post two'});
    await getPosts();
    await deletePost({title: 'post one', body: 'this is post one'});
    await getPosts();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    await createPost({title: 'post four', body: 'this is post four'});
    await getPosts();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await deletePost({title: 'post four', body: 'this is post four'});
    await getPosts();

    try {
        await deletePost({title: 'post three', body: 'this is post three'});
        await getPosts();
    } catch (err) {
        console.log(err);
    }
})();