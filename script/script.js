function savefile() {
    const d = new Date();
    let month = d.getMonth() + 1; 
    let day = d.getDate();
    let hour = d.getHours();
    let min = d.getMinutes();
    let timestamp = `${month}/${day}-${hour}:${min}`;
    let defaultFileName = `Note_${timestamp}.txt`;

    //console.log(`Generated timestamp: ${timestamp}`);

    const note = document.getElementById("data");
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


    const filenameInput = document.getElementById("filename");

    
    const cleanup = () => {
        document.getElementById("filename").focus();
        saveWindow.innerHTML='';
        document.removeEventListener("keydown", handleKeydown);
    };

    
    const handleKeydown = (e) => {
        if (e.code === "Enter") {
            const filename = filenameInput.value || defaultFileName;
            const data = note.innerText || "";
            const fileType = "text/plain";
            cleanup();
            download(data, filename, fileType);
            saveInLocalStorage(data, filename, timestamp);

             
        } 
        else if (e.code === "Escape") {
            cleanup();
        }
        else{
            console.log("Lohhhh");
        }
    };

    // Attach event listener
    document.addEventListener("keydown", handleKeydown);
}



function sharefile(){
    let data = document.getElementById("data").value;
    navigator.clipboard.writeText(data);
    alert("Copied text ... : "+ data);
}
function updatenote(data){
    document.getElementById("data").value=data;
}
function printFile(file) {
    const reader = new FileReader();
    
    reader.onload = function(event) {
        const data = event.target.result;
        
        updatenote(data);
    };

    reader.readAsText(file);
}

function loadfile(){
    const input = document.getElementById("load");
    const file = input.files[0];
    
    if (file) {
        printFile(file);
    } else {
        console.log("No file selected");
    }
}

function download(data, fileName, fileType) {
    const file = new Blob([data], { type: fileType });
    // For Internet Explorer support
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

