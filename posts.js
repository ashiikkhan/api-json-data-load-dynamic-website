function loadPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => displayPosts(data));
}
/**
 * get the container element where  you want to add the new elements
 *
 */

function displayPosts(posts) {
  const postsContainer = document.getElementById('posts-container');
  for (const post of posts) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post-div');
    postDiv.innerHTML = `
    <h5>User-${post.id}</h5>
    <h5>Post Title:  ${post.title}</h5>
    <p>Post: ${post.body} </p> 
    `;
    postsContainer.appendChild(postDiv);
  }
}

loadPosts();
