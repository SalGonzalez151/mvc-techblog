const postFormHandler = async (event) => {

    event.preventDefault();
    const description = document.querySelector('#description').value.trim();
    const title = document.querySelector('#name').value.trim();

    if ( description && title) {
        const response = await fetch('/api/dashboard', {
            method: 'POST',
            body: JSON.stringify({ title, description }),
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create new post');
        }
    }
};

const deleteHandler = async (e) => {
    if (e.target.matches(".del-btn") && e.target.hasAttribute('data-id')) {
        const id = e.target.dataset.id;
        const response = await fetch(`/api/dashboard/${id}`, {
            method: "DELETE",
        })
        if (response.ok) {
            document.location.reload()
            console.log(id)
        } else {
            alert("error deleting post")
        }
    }
}

document
    .querySelector('.project-form')
    .addEventListener('submit', postFormHandler);

document
    .querySelector('.dashboard')
    .addEventListener('click', deleteHandler);