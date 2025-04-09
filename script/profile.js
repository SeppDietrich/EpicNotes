function loadNotes(notes, recentNotescontainer, recentList, recentNotes){
	for(let i=notes.length-1; i>=0; i--){
		
		let note =document.createElement('li');
		note.innerHTML=`
			<div class="recent-list">
			 <div class="notes-date">${notes[i].date}</div>
			 <div class="notes-filename">${notes[i].filename}</div>
			</div>
		`;
		recentList.appendChild(note);

	}
	recentNotes.appendChild(recentList);
	recentNotescontainer.appendChild(recentNotes);

}

try {
    notes = JSON.parse(localStorage.getItem("notes"));
    if (!Array.isArray(notes)) {
        notes = [];
    }
} catch (e) {
    notes = [];
}
// console.log(notes);  //Debug masterpiece :)
let recentNotescontainer =document.getElementById('recent-container');
let recentNotes = document.createElement('div');
let recentList =document.createElement('ul');



loadNotes(notes, recentNotescontainer, recentList, recentNotes);




