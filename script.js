const bookForm = document.getElementById('bookForm');
const bookContainer = document.getElementById('bookContainer');


bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;

    // Create new book 
    const li = document.createElement('li');
    li.textContent = `Title: ${title}, Author: ${author}, Genre: ${genre}`;

    // Add book 
    bookContainer.appendChild(li);

    bookForm.reset();
});
