const user = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submit = document.getElementById('submit');

submit.addEventListener('click', function (event) {
    event.preventDefault();

    if (user.value.trim() === '' || title.value.trim() === '' || content.value.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    const post = {
        user: user.value.trim(),
        title: title.value.trim(),
        content: content.value.trim(),
    };


    saveData(`post_${Date.now()}`, post);


    window.location.href = 'blog.html';
});