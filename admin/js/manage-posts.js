
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
                <a href="update-post.html" id="updateLink">update</a><br>
                <a href="#" data-id="${post._id}" class="delete-links">Delete</a>
            </td>
            </tr>`



        }
        document.getElementById("tbody").innerHTML = htmlForThePost;
    }
    catch (error) {
        console.log(error)
    }
}
let deleteLink = document.getElementsByClassName("delete-links")

console.log(deleteLink)

for (let link of deleteLink) {
    link.addEventListener("click", async function (e) {
        console.log("Delete link clicked");
        if (e.target.className === "delete-links") {
            e.preventDefault();

            let linkId = e.target.dataset.id;
            console.log("Deleting post with ID:", linkId);
            let response = await fetch("https://blog-api-assignment.up.railway.app/posts/" + linkId, {
                method: `DELETE`
            });
        }

    })


}