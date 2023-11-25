
const editPost = async (event) => {
    event.preventDefault();


    const id = document.querySelector('.custom-card').getAttribute('data-id')
    const description = document.querySelector('project-desc').value.trim()
    const title = document.querySelector('project-name').value.trim()
    if (title && description) {
        try {
            const response = await fetch(`/api/post/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ title, description }),
                headers: { 'Content-type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Error editing post');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            alert('An error occurred while editing the Post');
        }
    }
};


document.querySelector('#edit-post').addEventListener('click', editPost);