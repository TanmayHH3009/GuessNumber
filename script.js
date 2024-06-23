

let num = Math.floor(Math.random() * 100 + 1);
        
function checkScore() {
    let userNum = document.querySelector("#num").value;
    let messageElement = document.createElement("p");

    let score = 100 - Math.abs(num - userNum);
    if (userNum == num) {
        messageElement.innerHTML = `Score is 100. You guessed it right! The number was ${num}.`;
                messageElement.classList.add("win");


        num = Math.floor(Math.random() * 100 + 1);
    } else {
        messageElement.innerHTML = `Score is ${score}. Try again!`;
                messageElement.classList.add("lose");

                 
             
    }
    document.querySelector(".inp").innerHTML = "";
    document.querySelector(".inp").appendChild(messageElement);
    document.querySelector("#num").value = '';

}

function restartGame() {
    num = Math.floor(Math.random() * 100 + 1);
    document.querySelector(".inp").innerHTML = "";
    document.querySelector("#num").value = '';
}