/*(2) Elabore um algoritmo que dada a idade de um nadador classifica-o em uma das seguintes categorias:
 
	infantil A = 5 - 7 anos
	infantil B = 8-10 anos
	juvenil A = 11-13 anos
	juvenil B = 14-17 anos
	adulto = maiores de 18 anos
*/

//input do usuário para idade
var idade = prompt("Informe a idade do nadador: ");
idade = Number(idade);

//Condicionais para definir categoria
if(idade > 18){
    console.log("O nadador é da categoria adulto.");
} else if (idade >= 14 && idade <= 17){
    console.log("O nadador é da categoria juvenil B.");
} else if (idade >= 11 && idade <= 13){
    console.log("O nadador é da categoria juvenil A.");
} else if (idade >= 8 && idade <= 10){
    console.log("O nadador é da categoria infantil B.");
} else if (idade >= 5 && idade <=7){
    console.log("O nadador é da categoria infantil A.");
}   else {
    console.log("Nadador fora de categoria ou idade inválida!");
}