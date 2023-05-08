const exemplo = document.getElementById('exemplo')
// let resultado = '';
// let i = 0; 
// do {
//     i += 1;
//     resultado += i + '';
//     alert(i)
// } while (i < 5);
// Array = [2, 4, 6, 8, 10]

// for (let x = 0; x < 10; x++) {
//     exemplo.innerHTML += x * 2 + ' '
//     console.log(x) 
// }

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
      document.write("<span style='color: red'>" + i + "</span><br>");
    } else {
      document.write(i + "<br>");
    }      
    exemplo.innerHTML += i += ' '
}

for (b = 10; b <= 10 && b >= 0; b-- ) {
    console.log(b)
}