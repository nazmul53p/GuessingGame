let correcr_ans = Math.floor((Math.random() * 3) + 1);

let count = 0
for (let i = 1; i <= 3; i++) {
    let input = parseInt(prompt("Guessing the number between 1 to 10:"));
     if (input === correcr_ans) {
        alert("You Win!")
        break;
    }else if (input < correcr_ans) {
        alert("Correct answer is greater!")
    } else if (input > correcr_ans) {
        alert("Correct answer is smaller!")
    }
     count +=1
}

if (count===3) {
    alert("You Loss!")
}