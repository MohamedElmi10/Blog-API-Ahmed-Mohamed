
fetchAllPosts();
async function fetchAllPosts() {

    try {
        const response = await fetch("https://blog-api-assignment.up.railway.app/posts")
        const posts = await response.json();
        console.log(posts)
        let htmlForThePost = "";
        for (let post of posts) {
            let postDate = new Date(post.date);
            htmlForThePost += `<tr>
            <td>${post.title}</td>
            <td>${post.author}</td>
            <td>${post.tags}</td>
            <td>${postDate}</td>
            <td>
                <a href="">update</a><br>
                <a href="">Delete</a>
            </td>
            </tr>`
            document.getElementById("tbody").innerHTML = htmlForThePost;


        }
    }
    catch (error) {
        console.log(error)
    }
}