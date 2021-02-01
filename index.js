let num = document.getElementById("num");
let final = document.getElementsByClassName("final");
let noOfGuess = 0;

//generate a random 4 digit number
function randomOneDigitNumber() {
    return Math.floor(Math.random() * 10);
}

function fourDigitRandomNumber() {
    let a = randomOneDigitNumber();
    let b = randomOneDigitNumber();
    let c = randomOneDigitNumber();
    let d = randomOneDigitNumber();
    return Number("" + a + b + c + d);
}

while(true){
    finalNumber = fourDigitRandomNumber();
    if(String(finalNumber).length == 4){
        break;
    }
}


function play() {
    let Code = document.getElementById("Code").value;
    if (String(Code).length !=4){
        document.getElementsByClassName("msg")[0].innerHTML = "Code Must be exactly 4 characters long"
        return;
    }
    noOfGuess++;
    //Split The number into array
    let arr = String(Code).split("");

    arr.forEach((element, index) => {
        if (element == finalNumber.toString().charAt(index)) {
            final[index].innerHTML = "&#10004";
        }
        else if (finalNumber.toString().includes(element)) {
            final[index].innerHTML = "&#10174";
        }
        else {
            final[index].innerHTML = "&#10008";
        }
    });

    //create table element
    let tbody = document.getElementById("tbody");

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");

    td1.innerHTML = Code;
    td2.innerHTML = num.innerText;

    tr.appendChild(td1);
    tr.appendChild(td2);

    tbody.prepend(tr);

    //set ???? value as same
    for (let index = 0; index < final.length; index++) {
        final[index].innerHTML = "?";
    }

    //check winning condition
    Win(finalNumber, Code,noOfGuess);
}

function Win(finalNumber, Code,noOfGuess) {
    if (finalNumber == Code) {
       CheckWin("green","You Win!!");
    }
    else if(noOfGuess > 10){
        CheckWin("red","You Lose!!");
    }
    else{
        document.getElementsByClassName("msg")[0].innerHTML = "Incorrect Try Again!!"; 
    }
}

function CheckWin(inpColor,msg) {
    setTimeout(() => {
        document.getElementsByClassName("input")[0].innerHTML = `<button onclick="reload()">Play Again</button>`;
        for (let index = 0; index < final.length; index++) {
        final[index].innerHTML = String(finalNumber).charAt(index);
        final[index].style.color = inpColor;
    }
    document.getElementsByClassName("msg")[0].innerHTML = msg
        }, 20); 
}

function reload(){
    location.reload();
}
