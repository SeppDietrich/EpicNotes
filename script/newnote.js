// Storage-related functions
let notes = [];
let currentNote = 0;

function loadNotesFromStorage() {
    try {
        notes = JSON.parse(localStorage.getItem("notes")) || [];
        if (!Array.isArray(notes)) notes = [];
    } catch (e) {
        notes = [];
    }
}

function loadCurrentIndex() {
    currentNote = localStorage.getItem('curent') ? localStorage.getItem('curent') : 0;
    console.log("Current index:", currentNoteIndex);
}

function updateNotesInStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function saveInLocalStorage(noteContent, filename, date) {
    notes.push({
        content: noteContent,
        filename: filename,
        date: date
    });
    updateNotesInStorage();
}

// Initialize storage when loaded
loadNotesFromStorage();
loadCurrentIndex();