// When user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
displayNotes();

addBtn.addEventListener("click", function (e) {
    let addText = document.getElementById("addText");
    let notes = localStorage.getItem("notes");
    let title= localStorage.getItem("title")
    if (notes == null) {
        noteVal = [];
    } else {
        noteVal = JSON.parse(notes);
    }
    noteVal.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(noteVal));
    addText.value = "";
    displayNotes();
    console.log(noteVal)
})

// Function to Display Notes 

function displayNotes() {
    let notes = localStorage.getItem('notes')
    
    if (notes == null) {
        noteVal = [];
    } else {
        noteVal = JSON.parse(notes);


    }

    let html = "";
    noteVal.forEach(function (element, index) {

        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}" onClick="deleteNote(this.id)"  class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;

    });
    let notesElem = document.getElementById('notes')
    if (notes.length != 0) {
        notesElem.innerHTML = html;
    }

    else {
        notesElem.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}

function deleteNote(index) {
    //   console.log("I am deleting", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteVal = [];
    } else {
        notesVal = JSON.parse(notes);
    }

    noteVal.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(noteVal));
    displayNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})