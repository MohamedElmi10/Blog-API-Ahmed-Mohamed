const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');


async function fetchPostDetails() {
  try{
    const response = await fetch(`https://blog-api-assignment.up.railway.app/posts/${postId}`);
    if (!response.ok) {
      throw new Error(`API Request Failed: ${response.status} ${response.statusText}`);
  }
  const post = await response.json();
  }
  // Här kan du fortsätta  Mohammed


  catch (error) {
console.error('Error fetching post details:', error.message);
  }
}
