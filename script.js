let myLibrary = [];

const cardContainer = document.querySelector(".cardContainer")
const newBookButton = document.querySelector(".newBookButton")
const modal = document.querySelector(".modal")
const form = document.querySelector(".form")
const authorInput = document.querySelector("#author")
const titleInput = document.querySelector("#title")
const pageCountInput = document.querySelector("#pageCount")
const isReadCheckbox = document.querySelector("#isRead")

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

function openModal() {
  modal.classList.replace("opacity-0", "opacity-100")
  modal.classList.remove("z-[-1]")
}

function closeModal(event) {
  if (!form.contains(event.target)) {
    modal.classList.replace("opacity-100", "opacity-0")
    modal.classList.add("z-[-1]")

    authorInput.value = ""
    titleInput.value = ""
    pageCountInput.value = ""
    isReadCheckbox.checked = false
  }
}

newBookButton.addEventListener("click", openModal)
modal.addEventListener("click", closeModal)

addBookToLibrary("J.K. Rowling", "Harry Potter and the Half-Blood Prince", 607, true)

addBookToLibrary("George Orwell", "Nineteen Eighty-Four", 328, false)

addBookToLibrary("Paulo Coelho", "The Alchemist", 163, false)

addBookToLibrary("Gretchen Rubin", "The Happiness Project", 368, false)

addBookToLibrary("Jim Collins", "Good to Great: Why Some Companies Make the Leap... and Others Don't", 320, false)

addBookToLibrary("Yann Martel", "Life of Pi", 352, false)

myLibrary.forEach(addCard)
