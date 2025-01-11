let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
   
    
    countEl.textContent = ++count
}

PrevEntr= saveEl.innerText
function save() {
    
    PrevEntr = PrevEntr+", "+count
    saveEl.innerText = PrevEntr
    countEl.innerText = 0
    count = 0
}