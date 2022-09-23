var alunos =  [
  ["Thais", 8, 6.5],
  ["Victor", 9, 10],
  ["Joao da Silva", 7, 8.5]
]

var nota1
var nota2
var total

for (var i=0; i < alunos.length; i++){
     alert("Nome do Aluno: " + alunos[i][0]  + "\nNota 1: " + alunos[i][1] + "\nNota 2: " + alunos[i][2])
  nota1 = alunos[i][1]*0.6
  nota2 = alunos[i][2]*0.4
  total=nota1+nota2;
alert("Nome do Aluno: " + alunos[i][0]  + "\nNota final: " + total)
}





