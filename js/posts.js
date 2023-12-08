async function fetchAllBlog(){
  try {
    const response = await fetch('https://blog-api-assignment.up.railway.app/posts');
    const blogs = await response.json();

    let blogsListHTML = "";
    for(let blog of blogs)  {
      const truncatedContent = blog.content.substring(0, 100);
      const readMoreLink = `<a href="post.html?id=${blog._id}" class="read-more">Read more..</a>`;
      blogsListHTML += `
      
     
      <div class="blog-post">
          <h2><span class="title">${blog.title}</span></h2>
          <p><span class="author date">${blog.author} | ${blog.date}</span></p>
          <p><b>tags:</b><span class="tags">${blog.tags.join(', ')}</span></p>
          <p><span class="content">${truncatedContent}</span>${readMoreLink}</p>
          </div>
          `;
    } 
    document.getElementById('blog-posts').innerHTML = blogsListHTML;
  }
 
  catch (error){
console.error(error);
  }
}
fetchAllBlog();