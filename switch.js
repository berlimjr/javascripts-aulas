const expr = prompt('Qual a fruta que você deseja levar? ');

switch (expr) {
    case "Laranjas":
        alert("As laranjas custam $0.59 o quilo.");
        break;
    case "Maçãs":
        alert("Maçãs custam $0.32 o quilo.");
        break;
    case "Bananas":
        alert("Bananas custam $0.48 o quilo.");
        break;
    case "Cerejas":
        alert("Cerejas custam $3,00 o quilo.");
        break;
    case "Mangas":
    case "Mamões":
        alert("Mangas e mamões custam $2.79 o quilo.");
        break;
    default:
        alert(`Desculpa, estamos sem nenhuma ${expr}`)

}

alert("Tem algo mais que você gostaria de levar?");

