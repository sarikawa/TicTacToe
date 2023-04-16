console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ding.mp3");
let gameover = new Audio("success.mp3");
let turn = "X"
let Isgameover = false;


// function to change the turn
const changeTurn = ()=>{
    return turn === "X" ? "0": "X"

}

const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2], 
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]  
    
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText=== boxtext[e[1]].innerText)&&
        (boxtext[e[2]].innerText=== boxtext[e[1]].innerText)&&
        (boxtext[e[0]].innerText !== "")){
            document.querySelector('.Info').innerText = boxtext[e[0]].innerText + " Won"
            Isgameover=true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            // document.querySelector(".line").style.


            // document.querySelector(".line").style.width="20vw";
        }
          

    })
        

}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText=== ''){
            boxtext.innerText = turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!Isgameover){
                document.getElementsByClassName("Info")[0].innerText = "Turn for "  + turn;
            }
        }

    })


})
//add onclick listener to reset button

reset.addEventListener('click', ()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>
        {
            element .innerText= " "
        });
        turn = 'X';
        Isgameover =false;
        document.getElementsByClassName("Info")[0].innerText = "Turn for "  + turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"

})