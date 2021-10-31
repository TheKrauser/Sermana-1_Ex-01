function contarVogais(parametro)
{
    const count = parametro.match(/[aeiou]/gi); //Comando para checar na string inteira e retornar todos os resultados relacionados com o que está dentro do /[]/
   
    if (!count)
        return 0; //Retornará o valor 0 caso a variavel count não tenha nada (seja ela Undefined, Null, False ou 0)
    else
        return count; //Se houver um valor então retorna ele
}

console.log(contarVogais("Testando"));
console.log(contarVogais("Kevin"));
console.log(contarVogais("Vamos testar com uma frase"));