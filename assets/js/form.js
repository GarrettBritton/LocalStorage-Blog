const user = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submit = document.getElementById('submit');

submit.addEventListener('click', function (event) {
    event.preventDefault();

    const post = {
        user: user.value.trim(),
        title: title.value.trim(),
        content: content.value.trim(),
    };

    saveData('post', post);
    localStorage.setItem('post', JSON.stringify(post));
    window.location.href = 'blog.html';
});