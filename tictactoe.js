console.log("Welcome to Tic Tac Toe")
// let music=new Audio("music.mp3")
let overgame=new Audio("gameover.mp3")
let audioturn=new Audio("song1.mp3")
let turn="X"
let isgameover=false
//function to turn win
const changeturn=()=>{
    return turn === "X" ? "0": "X"
}
//function to check for a win
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    for (let i = 0; i < wins.length; i++) {
        if (boxtext[wins[i][0]].innerText !== '' && boxtext[wins[i][0]].innerText === boxtext[wins[i][1]].innerText && boxtext[wins[i][1]].innerText === boxtext[wins[i][2]].innerText) {
            document.getElementsByClassName('info')[0].innerText = boxtext[wins[i][0]].innerText + " has won the game!";
            isgameover=true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="96px"
            overgame.play(); // play game over audio
        }
    }
}

//Game logic

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(i=>{
    let boxtext=i.querySelector('.boxtext')
    i.addEventListener('click',()=>{
        if(boxtext.innerText==='')
        {
        boxtext.innerText=turn
        turn=changeturn()
        audioturn.play();
        checkwin();
        if(!isgameover)
        {
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }

        }
    })
})

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    });
    turn="X"
    isgameover=false
    document.getElementsByClassName("info")[0].innerText="Turn for"+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width=0
   
});

   