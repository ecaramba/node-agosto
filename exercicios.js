// 1 - imprimir numero 1 ate 10

for (let i = 1; i <= 10; i++)
{
    console.log(i);
}

// 2 - imprimir uma palavra ao contrario
// ex: monitor -> rotinom

function reverter(palavra)
{
    let nova = "";

    for (let ini = palavra.length - 1; ini >= 0; ini -= 1)
    {
        nova += palavra.charAt(ini);
    }

    return nova;
}

module.exports = reverter;

