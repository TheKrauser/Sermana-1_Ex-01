function contarVogais(parametro) {
    var count = parametro.match(/[aeiou]/gi); //Comando para checar na string inteira e retornar todos os resultados relacionados com o que está dentro do /[]/
    if (count == null)
        return 0; //Retornará o valor 0 caso a variavel count não tenha nada
    else
        return count; //Se houver um valor então retorna ele
}
console.log(contarVogais("Testando"));
console.log(contarVogais("Kevin"));
console.log(contarVogais("Vamos testar com uma frase"));
//# sourceMappingURL=scriptA.js.map