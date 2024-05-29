let turn = "X";
let gameover = false;
let turn_music = new Audio("tpuch.mp3");
let back_music = new Audio("background.mp3");
const changturn = () => {
    return turn === "X" ? "0" : "X";
}

const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];



const checkwin = () => {
    var boxx = document.getElementsByClassName("boxtext");
    for (var e1 of arr) {
        var pos0 = box[e1[0]].innerText;
        var pos1 = box[e1[1]].innerText;
        var pos2 = box[e1[2]].innerText;


        if (pos0 != "" && pos1 != "" && pos2 != "") {
            if (pos0 == pos1 && pos1 == pos2) {
                document.querySelector('.win').innerText = "wining -" + boxx[e1[1]].innerText;
                // box[e1[0]].style.color = 'red';
                // box[e1[1]].style.color = 'red';
                // box[e1[2]].style.color = 'red';

                gameover = true;
              
                // clear(e1);
            }
        }

    }

};


let box = document.getElementsByClassName("mark");
Array.from(box).forEach(element => {
    let e = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (e.innerText === "" && gameover == false) {
            back_music.play();
            e.innerText = turn;
            turn = changturn();
            turn_music.play();
            checkwin();
            if (gameover == false) {
                document.getElementsByClassName("turnn")[0].innerText = "turn of -" + turn;
            }
        }
        else {

            if(confirm("game is over" ) ){
                clear();
            }
        }



    })
});
let clear = function () {

    let ew = document.querySelectorAll('.boxtext');
    Array.from(ew).forEach(element => {
        element.innerText = ""
        gameover = false;
        document.getElementsByClassName("win")[0].innerText = "wining -";
    });
    turn = changturn();
    document.getElementsByClassName("turnn")[0].innerText = "turn of -" + turn;

    // location.reload();


}
reset.addEventListener('click', clear);









