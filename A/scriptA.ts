function contarVogais(parametro)
{
    var count = parametro.match(/[aeiou]/gi); //Comando para checar na string inteira e retornar todos os resultados relacionados com o que está dentro do /[]/
    if (count == null)
        console.log("0"); //Imprimirá o valor 0 caso a variavel count não tenha nada
    else
        console.log(count); //Se houver um valor então imprime ele
}

contarVogais("Testando");
contarVogais("Kevin");
contarVogais("Vamos testar com uma frase");