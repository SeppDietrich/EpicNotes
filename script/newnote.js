// Better to use array literal notation
let notes = [];  
let current ;

function updateNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Initialize notes from localStorage
if (localStorage.getItem("notes")) {
    try {
        notes = JSON.parse(localStorage.getItem("notes"));
        // Ensure it's an array
        if (!Array.isArray(notes)) {
            notes = [];
        }
    } catch (e) {
        notes = [];
    }
} else {
    notes = [];
}
//Initialize curent from local storage 
// TODO:

function loadCurent(){
    if(localStorage.getItem('current')){
        current=localStorage.getItem('current')?    JSON.parse(localStorage.getItem('current'))  : 0;
    console.log(current);   
    }
    let data =document.getElementById('data');
    data.innerText=current.content;
    
}

loadCurent();


function saveInLocalStorage(note, filename, date){
	let newNote={ 
		content: note,
		filename: filename,
		date: date

	};
	notes.push(newNote);

	updateNotes();
}

 



	
