

async function fetchAllPosts() {
    try {
        const response = await fetch("https://blog-api-assignment.up.railway.app/posts")
        const posts = await response.json();

        for (let post of posts) {
            let postDate = new Date(post.date);


        }
    }
    catch (error) {
        console.log(error)
    }
}