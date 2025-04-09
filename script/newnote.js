// Better to use array literal notation
let notes = [];  
let curent ;

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
    if(localStorage)
    curent=localStorage.getItem('curent')? localStorage.getItem('curent') : 0;
    console.log(curent);
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

 



	
