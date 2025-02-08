function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => postsData(data));
}

//1: Get the container element where you want to add a new element.
//2:Create child element.
//3:Set innerText or innerHtml.
//4:appendChild.


function postsData(posts){

    const postsDiv = document.getElementById('posts-container');
    for(const post of posts){
       const div = document.createElement('div');
       div.classList.add('post');
       div.innerHTML = `<h4>${post.userId}</h4>
                        <h5>${post.title}</h5>
                        <p>Post Description: ${post.body}</p>`
        
        postsDiv.appendChild(div);                
    }
}

loadPosts();