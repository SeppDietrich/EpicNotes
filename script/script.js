
function getCurrentTimestamp() {
    const d = new Date();
    return `${d.getMonth() + 1}/${d.getDate()}-${d.getHours()}:${d.getMinutes()}`;
}

function downloadFile(data, fileName, fileType) {
    const file = new Blob([data], { type: fileType });
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(file, fileName);
    } else {
        const anchor = document.createElement("a");
        const url = URL.createObjectURL(file);
        anchor.href = url;
        anchor.download = fileName;
        document.body.appendChild(anchor);
        anchor.click();
        setTimeout(() => {
            document.body.removeChild(anchor);
            URL.revokeObjectURL(url);
        }, 0);
    }
}


function handleSaveConfirm(defaultFileName, noteContent) {
    const filename = document.getElementById("filename").value || defaultFileName;
    downloadFile(noteContent, filename, "text/plain");
    saveInLocalStorage(noteContent, filename, getCurrentTimestamp());
    document.getElementById("save-window").innerHTML = '';
}

function setupSaveDialog(defaultFileName, noteContent) {
    const filenameInput = document.getElementById("filename");
    filenameInput.focus();

    function handleKeyPress(e) {
        if (e.code === "Enter") {
            handleSaveConfirm(defaultFileName, noteContent);
            document.removeEventListener("keydown", handleKeyPress);
        } else if (e.code === "Escape") {
            document.getElementById("save-window").innerHTML = '';
            document.removeEventListener("keydown", handleKeyPress);
        }
    }

    document.addEventListener("keydown", handleKeyPress);
}

//Button function ffrom HTML
function savefile() {
    const timestamp = getCurrentTimestamp();
    const defaultFileName = `Note_${timestamp}.txt`;
    const noteContent = document.getElementById("data").innerText;
    const saveWindow = document.getElementById("save-window");

    saveWindow.innerHTML = `
        <div class="save">
            <h1 class="save-title">Name the File:</h1>
            <input id="filename" type="text" 
                placeholder="${defaultFileName}" 
                value="${defaultFileName}" 
                class="save-input" 
            />
        </div>
    `;

    setupSaveDialog(defaultFileName, noteContent);
}

function sharefile() {
    const data = document.getElementById("data").value;
    navigator.clipboard.writeText(data)
        .then(() => alert("Note copied to clipboard"))
        .catch(err => console.error("Copy failed:", err));
}

function loadfile() {
    const file = document.getElementById("load").files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById("data").value = e.target.result;
    };
    reader.readAsText(file);
}


// Setup event listeners
document.getElementById("load").addEventListener("change", loadfile);



// for editing text
let optionButtons = document.querySelectorAll(".option-button");
let writingArea = document.getElementById("data");

optionButtons.forEach(button => {
    button.addEventListener("click", () => {
        applyStyle(button.id);
        console.log(button.id);
    });
    
});

function applyStyle(style){
    let selection= window.getSelection();
    if(!selection.rangeCount) return;

    let range= selection.getRangeAt(0);
    let selectedText= range.toString();

    if (selectedText.length===0) return;

    let span= document.createElement("span");

    if(style == "bold"){
        span.style.fontWeight="bold";
    } else if(style=="italic"){
        span.style.fontStyle="italic";
    }else if (style=="underline"){
        span.style.textDecoration="underline";
    }

    span.textContent=selectedText;

    range.deleteContents();
    range.insertNode(span);

}

