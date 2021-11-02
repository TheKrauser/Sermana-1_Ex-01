function contarVogais(parametro : string) : number
{
    let minusculo = parametro.toLowerCase(); //Mudar toda a string para letra minúscula
    const count = minusculo.match(/[aáàãâeéêiíîoóõôuúû]/gi); //Comando para checar na string inteira e retornar todos os resultados relacionados com o que está dentro do /[]/
   
    if (!count)
        return 0; //Retornará o valor 0 caso a variavel count não tenha nada (seja ela Undefined, Null, False ou 0)
    else
        return count.length; //Se houver um valor então retorna ele, sendo a quantidade de vogais encontradas na palavra/frase
}

console.log(contarVogais("TesTandO"));
console.log(contarVogais("Kevin"));
console.log(contarVogais("Vamos testar com uma frase"));
console.log(contarVogais("TeStAnDíNhÔ"));