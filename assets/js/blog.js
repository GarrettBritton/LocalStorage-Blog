document.addEventListener('DOMContentLoaded', function () {
    renderPost();
});

function renderPost() {
    const post = getData('post'); 
    if (post !== null) {
        const postContainer = document.getElementById('post-container');
        postContainer.innerHTML = `
            <h2>${post.title}</h2>
            <p>Posted by ${post.user}</p>
            <p>${post.content}</p>
        `;
    } else {
        const postContainer = document.getElementById('post-container');
        postContainer.innerHTML = '<p>No post found.</p>';
    }
}

const back = document.getElementById('back-icon')

back.addEventListener('click', () => {


    window.location.href = 'index.html';
});