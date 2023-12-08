async function fetchAllBlog(){
  try{
    const response = await fetch('https://blog-api-assignment.up.railway.app/posts');
    const blogs = await response.json();

    let blogsListHTML = "";
    for(let blog of blogs){
      blogsListHTML += `

       <div id="blog-post">
      <div class="blog-post">
          <h2><span class="title">${blog.title}</span></h2>
          <p><span class="author" class="date">${blog.author} | ${blog.date}</span></p>
          <p><b>tags:</b><span class="tags">${blog.tags.join(', ')}</span></p>
          <p><span class="content"></span></p>
          </div>
          `;
    } 
    document.getElementById('blog-posts').innerHTML = blogsListHTML;
  }
 
  catch (error){
console.log(error);
  }
}
fetchAllBlog();