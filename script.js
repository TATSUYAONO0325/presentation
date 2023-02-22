let backTimer;
let flgFirst = true;
let cardFirst;
let countUnit = 0;

let imgArr = ["1", "2", "3", "4", "5","6"];

let imgTagArr = [];
for (let i = 0; i < 6; i++ ){
    imgTagArr.push("<img src='./img/" + imgArr[i] + ".jpg'>")
}

window.onload = function () {
    let arr = [];
    for (let i = 0; i < 6; i++) {
        arr.push(i);
        arr.push(i);
    } 
 
    shuffle(arr);
    let gameboard = document.getElementById("game_board");

    for (i = 0; i < 12; i++) {
        let div = document.createElement("div");
        div.className = "card back"; 
        div.number = arr[i]; 
        div.onclick = turn;
        gameboard.appendChild(div);
    }
    startTime = new Date(); 
    startTimer(); 
}

function shuffle(arr) {
    let n = arr.length;
    while (n) { 
        i = Math.floor(Math.random() * n--);
        [arr[n], arr[i]] = [arr[i], arr[n]]
    }
    console.log(arr)
    return arr;
}

function turn(e) {
    let div = e.target; 
    if (backTimer) return; 
    if (div.innerHTML == "") {
        div.className = "card"; 
        div.innerHTML = imgTagArr[div.number];
    } else {
        return 
    }
    if (flgFirst) {
        cardFirst = div;
        flgFirst = false;
    } else {
        if (cardFirst.number == div.number) {
            countUnit++;
            backTimer = setTimeout(function () {
                div.className = "card finish";
                cardFirst.className = "card finish";
                backTimer = NaN;
                if (countUnit == 6) { 
                    let img = document.getElementById("image_place");
                    img.src = "./img/1.jpg";
                    clearInterval(timer); 
                }
            }, 1000)
        } else {
            backTimer = setTimeout(function () {
                div.className = "card back";
                div.innerHTML = "";
                cardFirst.className = "card back";
                cardFirst.innerHTML = "";
                cardFirst = null;
                backTimer = NaN;
            }, 1000);
        }
        flgFirst = true;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn").addEventListener("click", function(){
    window.location.reload();
    })
});