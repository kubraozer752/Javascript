const listDOM = document.querySelector("#list")
let list = document.querySelectorAll("li")
    
    for (let i =0; i<list.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      list[i].appendChild(span);
    }

let close = document.getElementsByClassName("close")
for (let i =0; i<close.length; i++) {
    close[i].onclick = function () {
        this.parentElement.style.display = "none"
    }
}

function newElement() {
    
    const liDOM = document.createElement("li")
    const newItems = []
    newTask = document.querySelector("#task")
    newItems.push(newTask.value)
    localStorage.setItem("newTask", newTask.value)

    if (newTask.value === "") {
        $(".error").toast("show")
    } else {
    newItems.forEach(element => {
        liDOM.innerHTML = element
        listDOM.appendChild(liDOM)
    });
$(".success").toast("show")
    }
    newTask.value = ""

    
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        liDOM.appendChild(span);

        for (let i =0; i<close.length; i++) {
            close[i].onclick = function () {
               this.parentElement.style.display = "none"
            }
        }
      
}

let checkList = document.querySelector("ul")
checkList.addEventListener("click", function(checked) {
if( checked.target.tagName == "LI") {
    checked.target.classList.toggle("checked")
}
    })



