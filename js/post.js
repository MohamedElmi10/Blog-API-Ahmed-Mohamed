const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

fetchPostDetails();
async function fetchPostDetails() {
  try {
    const response = await fetch(`https://blog-api-assignment.up.railway.app/posts/${postId}`);
    if (!response.ok) {
      throw new Error(`API Request Failed: ${response.status} ${response.statusText}`);
    }
    const post = await response.json();
    // Här kan du fortsätta  Mohammed
    let htmlforcontent = "";
    htmlforcontent = `
    <h2>${post.title}</h2>
        <h5>${post.author}</h5>
        <h5>${post.date}</h5>
        <p>${post.content}</p>
  `
    document.getElementById("containerForInfo").innerHTML = htmlforcontent;
  }




  catch (error) {
    console.error('Error fetching post details:', error.message);
  }
}

