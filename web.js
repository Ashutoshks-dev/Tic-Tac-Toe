let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgcontiner = document.querySelector(".msg-container");
let newgame = document.querySelector("#new-reset");
let msg = document.querySelector("#msg");

let turn0=true;

const arr2 = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame = () => {
    turn0 = true;
    enablboxes();
    msgcontiner.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enablboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner= (Winner) =>{
    msg.innerText = `Congratulation, Winner is ${Winner}`;
    msgcontiner.classList.remove("hide");
    disableboxes();

}

const checkWinner = () =>{
    for(let pattern of arr2){
       
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
    
        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                console.log("Winner",val1);
                showWinner(val1);
                return;
            }

        
    } 
    
    let isDraw = [...boxes].every(box => box.innerText !== "");

    if (isDraw) {
        msg.innerText = "It's a Draw!";
        msgcontiner.classList.remove("hide");
        disableboxes();
    }
};
    
}

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);