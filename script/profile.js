function loadNotes(notes, recentNotescontainer, recentList, recentNotes){
	for(let i=0; i<notes.length; i++){
		
		let note =document.createElement('li');
		note.style.cssText+='display: flex; justify-content: space-between;padding: 2%'
		note.innerHTML=`
			 <div class="notes-date">${notes[i].date}</div>
			 <div class="notes-filename">${notes[i].filename}</div>
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
// console.log(notes);
let recentNotescontainer =document.getElementById('recent-container');
let recentNotes = document.createElement('div');
let recentList =document.createElement('ul');


loadNotes(notes, recentNotescontainer, recentList, recentNotes);


