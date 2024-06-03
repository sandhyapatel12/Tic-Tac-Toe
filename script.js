//access elements 
let boxes = document.querySelectorAll(".box");
let rsetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

//playerX, playerO
let turnO = true;       //set deafault flag to true

//store winning patterns
const winPatterns =
[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

//reset game
const resetGame = () =>
{
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) =>
{
    box.addEventListener("click", () =>
    {
        
        if(turnO)
        {
            //turn - playerO
            box.innerText = "O";
            turnO = false;
        }
        else
        {
            //turn - playerX
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;

        //check winner
        checkWinner();
    })
})

const disableboxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}
const enableboxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";     // pre type text remove(for new and reset game) 
    }
}
//show winner
const showWinner = (winner) =>
{
    msg.innerText = `congratulations... winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}


//check winner
const checkWinner = () =>
{
    for(let pattern of winPatterns)
    {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
                console.log("winner", pos1Val);

                //show winner
                showWinner(pos1Val);
            }
        }
    }
}

//perform following after click on newgame or reset game button 
newBtn.addEventListener('click', resetGame);
rsetBtn.addEventListener('click', resetGame);
