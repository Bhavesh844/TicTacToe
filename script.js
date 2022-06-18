var turn = 'X';
let gameover = false;
let move = 0;
let res = 1;

main();
//Change Turn
const cTurn = () => {
    if (turn === "X")
        turn = "O";
    else
        turn = "X";
};

//Checking Winner
const cWin = () => {
    let text = document.getElementsByClassName('text');
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    win.forEach((e, ind) => {
        if ((text[e[0]].innerText === text[e[1]].innerText) && (text[e[1]].innerText == text[e[2]].innerText) && (text[e[1]].innerText !== '')) {
            document.getElementById('info').innerText = text[e[0]].innerText + " Wins";
            document.getElementsByTagName('img')[0].style.width = '160px';
            gameover=true; 
            res=res+1;
            main();
        }
    });

};

//Reset button
const reset = () => {
    let text = [...document.querySelectorAll('.text')];
    text.forEach(e => {
        e.innerText = '';
    });
    document.getElementsByTagName('img')[0].style.width = '0px';
    document.getElementById('info').innerText = `Turn for ~~ ${turn}`;
    gameover = false;
    res = res + 1;
    move = 0;
    main();
};

//Main Logic
function main() {
    let boxes = [...document.getElementsByClassName('box')];
    boxes.forEach((e) => {
        e.addEventListener('click', () => {
            move = move + 1;   
            console.log(move);                              //Chaeck game Tie
            if (move === 9 * res) {                            //res use because event listner execute many time as click on reset button
                document.getElementById('info').innerText = "Game is Tie";
                gameover = true;
            }
            let text = e.querySelector('.text');          //Fetch each box
            if (text.innerText === '') {
                text.innerText = turn;
                cTurn();                                 //Change turn
            }
            cWin();                                       //Check if any Winner
            if (!gameover) {
                let info = document.getElementById('info');
                info.style.fontSize = "5vw";
                info.style.transition = "font-Size 0.5s ease-in-out";
                info.innerText = `Turn for ~~ ${turn}`;
            }
        });
    });

};