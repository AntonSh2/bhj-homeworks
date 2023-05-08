const deadId = document.getElementById("dead");
const lostId = document.getElementById("lost");
const getHole = index => document.getElementById(`hole${index}`);

let winner= 0;
let loos = 0;

for (let i = 1; i <= 9; i++) {
     getHole(i).onclick = function() {
        if (getHole(i).classList.contains('hole_has-mole')) {
            winner++;
            deadId.textContent = winner;
        } else {
            loos++;
            lostId.textContent = loos;
        };
        if (winner >=10) {
            alert('Вы выйграли!');
            location.reload();
        } else if (loos >= 5) {
            alert('Вы проиграли!');
            location.reload();
        }
    }
}


