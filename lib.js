const bookBtn = document.querySelector('.form-btn');
const  removeForm = document.querySelector('.remove');
const formContainer = document.querySelector('.form-container');
bookBtn.addEventListener('click', function(){
 formContainer.classList.add('active');
})
removeForm.addEventListener('click', function(){
    formContainer.classList.remove('active');
})


let myLibrary = []

class book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read
    }
}

const bookTitle = document.querySelector('#title')
const bookAuthor = document.querySelector('#author')
const bookPages = document.querySelector('#pages')
const isRead = document.querySelector('#checkread')
const formSubmitbtn = document.querySelector('#form-submitbtn')
const bookGrid = document.querySelector('.books-grid')
 

formSubmitbtn.addEventListener('click', function(event){
    const newBook = new book(bookTitle.value, bookAuthor.value, bookPages.value, isRead.checked)
    myLibrary.push(newBook)
    formContainer.classList.remove('active');
    myLibrary.forEach(el => {
        const div = document.createElement('div')
        div.classList.add('bookcard')
        const pTitle = document.createElement('p')
        const pAuthor = document.createElement('p')
        const pPages = document.createElement('p')
        const removeBtn = document.createElement('button')
        removeBtn.classList.add('removebtn')
        removeBtn.innerText = "Remove"
        pTitle.innerText = `"${el.title}"`
        pAuthor.innerText = el.author
        pPages.innerText = el.pages + " " + "pages"
        div.appendChild(pTitle);
        div.appendChild(pAuthor);
        div.appendChild(pPages);
        if(el.read === true){
            const readBtn = document.createElement('button')
            readBtn.classList.add('readbtn')
            div.append(readBtn)
        }else{
            const readBtn = document.createElement('button')
            readBtn.classList.add('unreadbtn')
            div.append(readBtn)
        }
        div.append(removeBtn);
        bookGrid.appendChild(div)
    })
    myLibrary.pop(newBook)
    bookTitle.value = ''
    bookAuthor.value = ''
    bookPages.value = ''
})

document.addEventListener( "click", someListener );

function someListener(event){
    let element = event.target;
    if(element.tagName == 'BUTTON' && element.classList.contains("removebtn")){
        event.target.parentNode.remove();
    }
}

document.addEventListener( "click", function(event){
    let element = event.target;
    if(element.tagName == 'BUTTON' && element.classList.contains("unreadbtn")){
        event.target.classList.remove('unreadbtn');
        event.target.classList.add('readbtn')
    }else if(element.tagName == 'BUTTON' && element.classList.contains("readbtn")){
        event.target.classList.remove('readbtn');
        event.target.classList.add('unreadbtn')
    }
});



