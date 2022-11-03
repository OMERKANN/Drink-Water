const smallCups = document.querySelectorAll(".cub-small");
const listers = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const  remained= document.getElementById("remained");

updateBigCup()

smallCups.forEach((cub, idx) => {
    cub.addEventListener("click", () => heighthig(idx))

})




function heighthig(idx){
    if(smallCups[idx].classList.contains("full") && !smallCups[idx].nextElementSibling.classList.contains("full")){
        idx--
    }
    smallCups.forEach((cub, idx2) => {
            if(idx2 <= idx){
                cub.classList.add("full")
            }else{
                cub.classList.remove("full")
            }
    })

    updateBigCup()
}

function updateBigCup(){
    const fullCups = document.querySelectorAll(".cub-small.full").length
    const totalCups = smallCups.length


    if(fullCups === 0) {
        percentage.style.visibility = "hidden"
        percentage.style.height = 0    
    }else{
        percentage.style.visibility = "visible"
        percentage.style.height = `${fullCups / totalCups * 300}px`
        percentage.innerText =Math.floor(`${fullCups / totalCups * 100}`)+"%"
    }

    if(fullCups === totalCups) {
        remained.style.visibility = "hidden"
        remained.style.height = 0    
    }else{
        remained.style.visibility = "visible"
        listers.innerText =`${2 - (fullCups * 250 / 1000 )}L`
        
    }
}