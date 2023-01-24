let button = document.getElementById('btn');
button.onclick = () => {
    let A = document.getElementById('A').value
    let P = document.getElementById('P').value
    let select = document.getElementById('select').value;

    let output = null;
    switch (select) {
        case '+':
            output = parseInt(A) + parseInt(P);
            break;
        case '-':
            output = A - P;
            break;
        case '*':
            output = A * P;
            break;
        case '/':
            output = A / P;
            break;
    }
    document.getElementById('output').value = output;
}