let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container")
let noWin = document.querySelector(".no-winner")



let turn0 = true;

const winnigPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = ()=>{
    turn0 = true;
    enableBoxes()
    msgContainer.classList.add("hide")
}

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turn0){
            box.innerText = "X"
            box.style.color = "blue"
            turn0 = false
        }else{
            box.innerText = "O"
            box.style.color = "red"
            turn0 = true
        }
        box.disabled = true
        checkWinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}

const showWinner =(winner)=>{
    msg.innerText = `Congratulations Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes()
}

let checkWinner = () =>{
    for(pattern of winnigPatterns){

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val)
                
            }

        }
    }
}

newBtn.addEventListener("click", ()=>{
    resetgame()

})
resetbtn.addEventListener("click", ()=>{
    resetgame()

})


