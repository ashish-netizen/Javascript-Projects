console.log("Hello")



// Book Constructor

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}


// function to display details


function Display() {



}



Display.prototype.add = function (book) {
    console.log("Display Data")
    let tableData = document.getElementById("tableData")

    let data = ` 
    <tr>
    <th scope="row">1</th>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
   </tr>
  `
    tableData.innerHTML += data;
}

// Method to clear the previous form data
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm')
    libraryForm.reset();

}
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true;
    }
}

Display.prototype.show = function (type, dmessage) {
    let message = document.getElementById("message");
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
<strong>Messge:</strong> ${dmessage}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
<span aria-hidden="true">×</span>
</button>
</div>`
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);

}





// let add submiteventlistener

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit)


function libraryFormSubmit(e) {

    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;

    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type)
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Book Added Suceessfully');
    }
    else {
        display.show('danger', "You cannot Add the Book SucessFully")
    }

    e.preventDefault();

}
