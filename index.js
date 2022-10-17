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

const subContainer = document.getElementById('sub-container')

function addLikes(post){
    alert(post)
}

let innerStuff = ``
function renderPosts(){
    for(let el of posts){
        innerStuff += `
        <section class="top-section">
        <img class="avatar" src="${el.avatar}" alt="avatar of van Gogh">
        <div class="name">
            <h3 class="font700 text-height name-text">${el.name}</h3>
            <p class="text-height name-location">${el.location}</p>
        </div>
        </section>
        <section class="middle-section">
        <img class="image-post" src="${el.post}" alt="selfie of van Gogh">
        </section>
        <section class="bottom-section">
        <div class="icons-container">
            <img onclick='addLikes(${el})' class="icons" src="images/icon-heart.png" alt="hear icon">
            <img class="icons" src="images/icon-comment.png" alt="comment icon">
            <img class="icons" src="images/icon-dm.png" alt="dm icon">
        </div>
        <p class="likes font700 text-height">${el} likes</p>
        <p class="comment text-height"><name class="font700">${el.username}</name> ${el.comment}</p>
        </section>
        `
    }
    
    subContainer.innerHTML = innerStuff
}

renderPosts()