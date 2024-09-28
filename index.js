const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.getElementById('posts-container')

let htmString = ''


function renderPosts(){
    for(let item of posts){
        htmString +=`
            <section>
                <div class="top-post">
                    <img class="avatar" src="${item.avatar}" alt="a picture of ${item.name}">
                    <div class="avar-descriptions">
                        <h4 class="name"> ${item.name}</h4>
                        <p class="location"> ${item.location}</p>
                    </div>
                </div>
                <div>
                    <img class="post" src="${item.post}" alt="a selfie of ${item.name}">
                </div>
                <div class="bottom-post">
                    <div class="icons-containter">
                        <img class="icon" src="./images/icon-heart.png" alt="like commnet logo">
                        <img class="icon" src="./images/icon-comment.png" alt="comment on post logo">
                        <img class="icon" src="./images/icon-dm.png" alt="send dm logo">
                    </div>
                    <p class="likes">${item.likes} likes</p>
                    <p class="comment">${item.username} ${item.comment}</p>
                </div>
            </section>
        ` 
    }

    main.innerHTML = htmString
}

renderPosts()