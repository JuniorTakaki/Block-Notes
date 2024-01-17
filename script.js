const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box")
let previousNote = null

//função para mostrar na tela o arquivo salvo no localStorage
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

// sistema de salvar automatico ao dar reload na tela sem perder os dados
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    
    if (previousNote === null || previousNote.texContent.trim() !==""){
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className ="input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "notes-app-img/images/delete.png"
    notesContainer.appendChild(inputBox).appendChild(img);

    previusNote = inputBox;
    }
})
//depois de criar a function updateStorage() vc colocar no insert de apagar dados colocando apenas o "updateStorage()"
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage(); 
            }
        })
    }
})