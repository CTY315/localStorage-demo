
//initial count is previous saved num or 0
document.getElementById("number").innerText = localStorage.getItem("count") || 0

//show number
function numberView(number){
    let num = document.getElementById("number")
    num.innerText = number
}

//add one to number per click
function plusOne(){
    let num = localStorage.getItem("count")|| 0;
    num++;
    numberView(num)
    localStorage.setItem("count",num)
    
}

//add one button
let button = document.getElementById("btn");
button.addEventListener("click",()=>{
    plusOne()
})

//reset button to reset number to 0
function reset(){
    localStorage.clear();
    numberView(0)
}

let resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click",()=>{
    reset()
})