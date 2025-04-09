// Note display functions
function createNoteElement(note) {
    const noteElement = document.createElement('li');
    noteElement.innerHTML = `
        <div class="recent-list">
            <div class="notes-date">${note.date}</div>
            <div class="notes-filename">${note.filename}</div>
        </div>
    `;
    return noteElement;
}

function displayNotes(notes) {
    const container = document.getElementById('recent-container');
    const notesList = document.createElement('ul');
    
    for (let i = 0; i < notes.length; i++) {
        notesList.appendChild(createNoteElement(notes[i]));
    }
    
    container.appendChild(notesList);
}


try {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    displayNotes(storedNotes);
} catch (e) {
    console.error("Error loading notes:", e);
}