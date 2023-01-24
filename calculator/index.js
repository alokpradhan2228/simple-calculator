let button = document.getElementById('btn');
button.onclick = () => {
    let x = document.getElementById('x').value
    let y = document.getElementById('y').value
    let select = document.getElementById('select').value;

    let output = null;
    switch (select) {
        case '+':
            output = parseInt(x) + parseInt(y);
            break;
        case '-':
            output = x - y;
            break;
        case '*':
            output = x * y;
            break;
        case '/':
            output = x / y;
            break;
    }
    document.getElementById('output').innerText = output;
}