const projectFormHandler = async (event) => {

    event.preventDefault();
    const description = document.querySelector('#description').value.trim();
    const needed_funding = document.querySelector('#funding').value.trim();

    if ( description && needed_funding) {
        const response = await fetch('/api/dashboardRoute', {
            method: 'POST',
            body: JSON.stringify({ description, needed_funding }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create new project');
        }
    }
};

const deleteHandler = async (e) => {
    if (e.target.matches(".del-btn") && e.target.hasAttribute('data-id')) {
        const id = e.target.dataset.id;
        const response = await fetch(`/api/dashboardRoute/${id}`, {
            method: "DELETE",
        })
        if (response.ok) {
            document.location.reload()
        } else {
            alert("error deleting project")
        }
    }
}

document
    .querySelector('.dashboard')
    .addEventListener('submit', projectFormHandler);

document
    .querySelector('.dashboard')
    .addEventListener('click', deleteHandler);