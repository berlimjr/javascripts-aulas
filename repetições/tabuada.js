const numero = parseInt(prompt("Insira um número para gerar a tabuada:"));

for(let i = 1; i <= 10; i++) {
  const resultado = numero * i;
  let tabuada = '';
  for(const multiplicador of [numero, i, resultado]) {
    tabuada += `${multiplicador}\t`;
  }
  console.log(tabuada);
}
