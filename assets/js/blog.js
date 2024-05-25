document.addEventListener('DOMContentLoaded', function () {
    renderPosts();
});

function renderPosts() {
    let allPosts = [];
    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('post_')) {
            const post = JSON.parse(localStorage.getItem(key));
            allPosts.push(post);
        }
    }


    const postContainer = document.getElementById('post-container');
    if (allPosts.length > 0) {
        postContainer.innerHTML = allPosts.map(post => `
            <div class="post">
                <h2>${post.title}</h2>
                <p>Posted by: ${post.user}</p>
                <p>${post.content}</p>
            </div>
        `).join('');
    } else {
        postContainer.innerHTML = '<p>No posts found.</p>';
    }
}

window.addEventListener('popstate', function(event) {
    renderPosts();
});

const back = document.getElementById('back-icon')

back.addEventListener('click', () => {
    window.history.back();
});


function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getData(key) {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
}