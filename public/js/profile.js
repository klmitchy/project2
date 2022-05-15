const newUserInfo = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#fav-name').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to add comment');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newUserInfo);

document
  .querySelector('.comment-list')
  .addEventListener('click', delButtonHandler);
