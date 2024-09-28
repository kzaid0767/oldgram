let posts = [
    {
        id:1,
        name: "Kassim Zaid",
        username: "kabuza515",
        location:"ATL, Georgia",
        avatar:"images/mebearded.jpg",
        post: "images/mebearded.jpg",
        comment: "just easy skanking!",
        likes: 33,
        isLiked: false
    },
    {
        id:2,
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        isLiked: false
    },
    {
        id:3,
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        isLiked: false
    },
        {
        id:4,
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLiked: false
    }
]

const main = document.getElementById('posts-container')


document.addEventListener("click",handleLike)

function handleLike(e){
    let num = Number(e.target.id)
    console.log(num)
    if(num){
        // find object
    let obj = posts.find(item => item.id === num)
    
    //updating found object
    if(!obj.isLiked){
        obj.likes +=1
    }else{
        obj.likes -=1
    }
    obj.isLiked = !obj.isLiked
    posts[num-1] = obj
    renderPosts(posts)
    }
}


function renderPosts(arr){
    let htmString = ''
    for(let item of arr){
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
                        <img class="icon" src="./images/icon-heart.png" alt="like comment logo" id="${item.id}">
                        <img class="icon" src="./images/icon-comment.png" alt="comment on post logo">
                        <img class="icon" src="./images/icon-dm.png" alt="send dm logo">
                    </div>
                    <p class="likes">${item.likes} likes</p>
                    <p class="comment"><span>${item.username}</span> ${item.comment}</p>
                </div>
            </section>
        ` 
    }

    main.innerHTML = htmString
}

renderPosts(posts)