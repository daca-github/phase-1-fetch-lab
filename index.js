function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then(response => response.json())
  .then(data => {
   renderBooks(data)
   const fifthBook = data[4].name
   console.log(fifthBook)
   return character1031()
})
}

function character1031() {
  return fetch("https://www.anapioficeandfire.com/api/characters/1031")
  .then(response => response.json())
  .then(data => {
    console.log(data.name)
    return data
  })
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
