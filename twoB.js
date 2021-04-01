

function sevenRandomNumbers() {
    let arr = [];
    for (let i = 1; i <= 7; i++) {
        var num = Math.floor(Math.random() * 9) + 1;
        if (arr.indexOf(num) === -1) {
            arr.push(num);
        };
    };
    return arr;
}
console.log(sevenRandomNumbers());
