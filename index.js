let button = document.getElementById('btn');
let container = document.getElementById('container');

function colors() {
    let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let color = "#";
    for (let i = 1; i <= 6; i++) {
        let n = Math.round(Math.random() * 15);
        color = color + values[n];
    }
    container.style.backgroundColor = color;
}

colors();
button.addEventListener('click', colors);
