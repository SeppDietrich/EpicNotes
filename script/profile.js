try {
    notes = JSON.parse(localStorage.getItem("notes"));
    if (!Array.isArray(notes)) {
        notes = [];
    }
} catch (e) {
    notes = [];
}

function saveCurrentNote(number){
	let notesList=document.querySelectorAll(".recent-list");
	for(let i=0; i<notesList.length;i++ ){
		if(notesList[i].id==number){
			localStorage.setItem("current", JSON.stringify(notes[number]));
 	    	console.log(localStorage.getItem("current"));
 	    	window.location.href='newnote.html';
		}
		else{
			console.log(notesList[i].id);
		}
	}
	
}

function loadNotes(notes, recentNotescontainer, recentList, recentNotes){
	for(let i=notes.length-1; i>=0; i--){
		
		let note =document.createElement('li');
		note.innerHTML=`
			<div class="recent-list" id="${i}" onclick="saveCurrentNote(${i})">
			 <div class="notes-date">${notes[i].date}</div>
			 <div class="notes-filename">${notes[i].filename}</div>
			</div>
		`;
		recentList.appendChild(note);

	}
	recentNotes.appendChild(recentList);
	recentNotescontainer.appendChild(recentNotes);
}


// console.log(notes);  //Debug masterpiece :)
let recentNotescontainer =document.getElementById('recent-container');
let recentNotes = document.createElement('div');
let recentList =document.createElement('ul');



loadNotes(notes, recentNotescontainer, recentList, recentNotes);





