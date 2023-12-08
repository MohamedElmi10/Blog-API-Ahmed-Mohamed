async function fetchAllBlog(){
  try{
    const response = await fetch('https://blog-api-assignment.up.railway.app/posts');
    const blogs = await response.json();

    let blogsListHTML = "";
    for(let blog of blogs){
      
    }
  }
  catch (error){
console.log(error);
  }
}