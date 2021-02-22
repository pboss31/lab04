

function swap(){
    const tile = document.querySelectorAll('td');
    tile.forEach(element => {
        if(element.classList.contains("black")){
        element.classList.remove("black")
        }
        else {
        element.classList.add("black")
        }    
    });
}

const table = document.querySelector("table")
table.addEventListener("click",swap)

