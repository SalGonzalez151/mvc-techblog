const addComment = async (event) => {
    event.preventDefault();

    const url = window.location.href;

    const match = url.match(/\/post\/(\d+)/);
    const targetId = match[1];

    if (match) {
        const comment = document.querySelector('.form-input').value.trim();
        //seed comment with comment value in dashboard
        if (comment) {
            const response = await fetch('/api/comments', {
                method:'POST',
                body:JSON.stringify({ comment, targetId}),
                headers: { 'Content-type': 'application/json'},
            })

            if (response.ok) {
                document.location.reload()
            } else {
                alert('error adding coment');
            }
        }

    }
};

document.querySelector('#add-comment').addEventListener('click', addComment);