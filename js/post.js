const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');


async function fetchPostDetails() {
  try{
    const response = await fetch(`https://blog-api-assignment.up.railway.app/posts/${postId}`);

  }
  catch (error) {
console.error('Error fetching post details:', error.message);
  }
}
