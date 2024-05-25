document.addEventListener('DOMContentLoaded', function () {
    renderMessage();
});

function renderMessage() {
    const lastPost = JSON.parse(localStorage.getItem('post'));
    if (lastPost !== null) {
        document.querySelector('.message').textContent = `${lastPost.user} posted: ${lastPost.title} - ${lastPost.content}`;
    }
}

const back = document.getElementById('back-icon')

back.addEventListener('click', () => {


    window.location.href = 'index.html';
});