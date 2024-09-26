/*
var nome = prompt ( "Qual seu nome?") SEJA BEM VINDO nome

alert( " SEJA BEM VINDO" + nome)

val numero1 = prompt ("Digite o primeiro numero")
 criar mais uma variavel , que armazena o segundo numero 

criar um alerta que retorna a multiplicacao entre
o primeiro e o segundo


var numberx = Number(prompt("digite um numero"))
var number2x = numberx*2
var number3x = numberx*3
alert("O dobro de " + numberx + " é " + number2x + " e o triplo é " + number3x)



var nome = (prompt ("Qual o nome do aluno"))
var nota1 = Number (prompt (" Qual a primeira nota do " + nome ))
var nota2 = Number (prompt ("Ok.Primeira nota "+ nota1+". Qual a segunda nota? "))
var media = (nota1 + nota2) /2
alert("a media final sera" + media)  

if (media >= 6){
    alert(" Aluno " + nome + " APROVADO ")
}
else{
    alert( " Aluno " + nome + " REPROVADO ")
}



var numero1 = 100
var numero2 = 50
var numero3 = 3

alert (numero * numero)

 var nome = "Caio"
 var sobrenome = "Vinicius"
 

 var nome = prompt ( "Qual seu nome? ")
 alert( " SEJA BEM VINDO " + nome)
 

 var idade = (prompt ("Qual sua idade "))
 if (idade >=18){
    alert (" maior de idade")
 }
 else{
    alert("menor de idade")
 }

 

 var nota = (prompt ( "Qual sua nota "))
 if (nota >=60){
 else{
    alert ("REPROVADO")
 }                     


 var peso = prompt (" Qual seu peso")
 var altura = prompt (" Qual sua altura")
 var imc = peso/(altura * altura)
alert (imc.toFixed(2))
 
if ( imc <=16.9 ){
alert (" Muito abaixo do peso")
}

if ( imc >=17 && imc <18.4){
    alert (" Abaixo do peso")
}

if ( imc >=18.5 && imc <24.9){
    alert (" Peso normal")
}
if ( imc >=30 && imc <34.9){
    alert (" Obsidade grau 1")
}
if ( imc >=35 && imc <40){
    alert (" Obsidade grau 2")
}
if ( imc >=40){
    alert (" Obsidade grau 3 )
}

*/

//var listaDeCursos = [ "Programação", " Enfermagem" , "Estetica" , "Segurança" , "Adiministração" , "Informatica" , "Exel" ]

/*
alert (listaDeCursos [0] )
alert (listaDeCursos [1] )
alert (listaDeCursos [2] )
alert (listaDeCursos [3] )
alert (listaDeCursos [4] )
alert (listaDeCursos [5] )
alert (listaDeCursos [6] )

//listaDeCursos.forEach( curso => alert(curso) )

for(var i=0; i<=6, i++){
    alert(listaDeCursos[i])
}



for(var i=90; i>=0; i--){
    alert(i)
} 



var listaDeNomes =[ "Maylon " , " Arthur " , " Ryan " , " Raphael " , " Maria " , " Gabriel " , " Macoly " , " Dalton " , " Patrick "]
  
var indiceProcurado = prompt (" Qual o indice do aluno")

alert ( listaDeNomes [ indiceProcurado ]) 



var numero =  Number (prompt ("DIgite um numero"))
for ( var i=0; i<=9; i++){
alert ( i + "x" + numero + " = " + (i * numero))
}
*/

/*
var listaDeJogos = (" FIFA "Call ,"  of Duty " , "Read Dead " , "CS")

listaDeJogos.push( "")
listaDeJogos.pop("")
listaDeJogos.shift("")
listaDeJogos.splice("")
listaDeJogos.reverse("")
 var indice = listaDeJogos.indexOf(" FIFA")
 alert( indice) 
listaDeJogos.forEach(jogo => alert ("Estou jogando " + jogo ))
    
*/
/*
var listaDeJogos = [" FIFA " , "Call " , "of Duty " , "Read Dead " , "CS"]

var qtdejogosNovos = prompt(" Quantos jogos voce quer adicionar?")

for(var i=0; i<qtdejogosNovos; i++){
    var jogo = prompt(" Digite o nome do jogo")
    listaDeJogos.push(jogo)

}

alert (listaDeJogos)


alert ("Bem Vindo ao sistema")
while (operacao != 3)  {
    var operacao = prompt("1- saldo\n2 - Transferencia\n3- Sair do sistema")
}



var pessoa1 = {
 nome:"Caio" ,
 sobrenome: "Vinius" ,

}
*/

/*
//var listaDeNomes =[ "Maylon " , " Arthur " , " Ryan " , " Raphael " , " Maria " , " Gabriel " , " Macoly " , " Dalton " , " Patrick "]
var curso = {
nome:"Logica de programação",
alunos: listaDeNomes,
cargaHoraria: 60,
materia: "Javascript",
dataInicio: "27/08/2024",
dataFinal: "29/09/2024",
}

alert (curso.nome + " e um curso com " + curso.cargaHoraria + " h de carga horaria ")

/
function rotina(){
    alert ("Acordar")
    alert ("Arrumar a cama")
    alert ("Escovar os dentes")
    alert ("Almoço")
    alert ("Ir para a escola")

}

rotina()


function somarNumeros(){
    var num1 = Number(prompt ("Digite o primeiro numero"))
    var num1 = Number(prompt ("Digite o segundo numero"))
    var resultado = num1 + num2
    alert(resultado)    
}

somarNumeros()
       
function saudacao (nome) {
    alert ("Seja bem vindo, " + nome) 
    alert("Digite a operacao : \n1- Tal \n2- Tal")

}
  

saudacao("Caio")
*/

//BANCO COM SALDO EXTRATO TRANSFERENCIAS
/*

 */




    alert("Seja bem-vindo ao banco digital");

var saldo = 1000;
var operacao = 0;

while (operacao != 5) {
    operacao = prompt("O que você deseja fazer? \n1- Ver saldo bancário \n2- Transferência \n3- Fazer cobrança \n4- Pedir empréstimo \n5- Sair do banco");
    if (operacao == 1) {
        alert("Seu saldo é: R$ " + saldo);
    } else if (operacao == 2) {
        var valorTransferencia = Number(prompt("Digite o valor que deseja transferir:"));
        if (valorTransferencia > saldo) {
            alert("Saldo insuficiente para a transferência.");
        } else {
            saldo -= valorTransferencia;
            alert("Transferência de R$ " + valorTransferencia + " realizada com sucesso! Seu novo saldo é: R$ " + saldo);
        }
    } else if (operacao == 3) {
        var valorCobranca = Number(prompt("Digite o valor que deseja cobrar:"));
        alert("Cobrança de R$ " + valorCobranca + " registrada. Aguarde o pagamento.");
    } else if (operacao == 4) {
        var valorEmprestimo = Number(prompt("Digite o valor que deseja pedir emprestado:"));
        alert("Pedido de empréstimo de R$ " + valorEmprestimo + " enviado para análise.");
    } else if (operacao == 5) {
        alert("Saindo do banco...");
    } else {
        alert("Operação inválida. Tente novamente.");
    }
}


