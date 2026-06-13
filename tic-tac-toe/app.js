let btn = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#new");
let mess = document.querySelector("#msg");
let msgcont = document.querySelector(".msg-cont");
let turn0 = true;

const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];  
btn.forEach((box) =>{
box.addEventListener("click", () =>{
    console.log("Boxes is clicked!");
    if(turn0){
        box.innerText = "X";
        turn0 = false;
        }else
        {
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;
        checkwin();
});
});

const disablebtn = () => {
    btn.forEach((box) => {
        box.disabled = true;
    });
}
const showwinner = (winner) => {
    mess.innerText = `Congratulations! ${winner} wins!`;
    msgcont.classList.remove("hide");
    disablebtn();
}
const checkwin = () => {
    for(let pattern of win)
    {
        let pos1 = btn[pattern[0]].innerText;
        let pos2 = btn[pattern[1]].innerText;
        let pos3 = btn[pattern[2]].innerText;
        
    if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
        {
            showwinner(pos1);
           
        }
    }
}
}
reset.addEventListener("click", () => {
    btn.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
});

newgame.addEventListener("click", () => {
    btn.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msgcont.classList.add("hide");
}); 