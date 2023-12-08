async function fetchAllBlog(){
  try{
    const response = await fetch('https://blog-api-assignment.up.railway.app/posts');
    const blogs = await response.json();

    let blogsListHTML = "";
    for(let blog of blogs){
      blogsListHTML += `

       <div id="blog-post">
      <div class="blog-post">
          <h2><span class="title"></span></h2>
          <p><span class="author" class="date"></span></p>
          <p><b>tags:</b><span class="tags"></span></p>
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