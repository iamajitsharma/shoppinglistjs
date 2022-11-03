let input = document.getElementById("input")
let button = document.getElementById("addItem")
let ul = document.getElementById("list")

function inputLengthCheck() {
    return input.value.length
}

function createElementList() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li)
    input.value = ""
}

function addListItem() {
    if(inputLengthCheck() > 0) {
        createElementList();
    }
}

// function addListItemKeypress(event) {
//     console.log(event.which)
//     // if(inputLengthCheck() > 0 && event.which === 13) {
//     //     createElementList();
        
//     // }

// }

let addListItemKeypress = (e) => {
   if(inputLengthCheck() > 0 && e.keyCode === 13) {
    createElementList();
   }
}

button.addEventListener("click", addListItem)
input.addEventListener("keypress", addListItemKeypress)
