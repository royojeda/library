let myLibrary = [];

const cardContainer = document.querySelector(".cardContainer")

function Book(author, title, pageCount, isRead) {
  this.author = author
  this.title = title
  this.pageCount = pageCount
  this.isRead = isRead
}

function addBookToLibrary(author, title, pageCount, isRead) {
  const book = new Book(author, title, pageCount, isRead)
  myLibrary.push(book)
}

function addCard(book) {
  const card = document.createElement("div")
  card.className = "flex-1 flex flex-col justify-center p-6 rounded-lg shadow border text-center"

  const title = document.createElement("div")
  title.className = "font-medium"
  title.textContent = book.title
  card.appendChild(title)

  const author = document.createElement("div")
  author.className = "italic"
  author.textContent = book.author
  card.appendChild(author)

  const pageCount = document.createElement("div")
  pageCount.textContent = `${book.pageCount} pages`
  card.appendChild(pageCount)

  const isRead = document.createElement("div")
  isRead.textContent = book.isRead ? "Finished" : "Not Finished"
  card.appendChild(isRead)

  cardContainer.appendChild(card)
}

addBookToLibrary("J.K. Rowling", "Harry Potter and the Half-Blood Prince", 607, true)

addBookToLibrary("George Orwell", "Nineteen Eighty-Four", 328, false)

addBookToLibrary("Paulo Coelho", "The Alchemist", 163, false)

myLibrary.forEach(addCard)
