class Aluno{
  
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota){
    this.primeiroNome = primeiroNome
    this.segundoNome = segundoNome
    this.primeiraNota = primeiraNota
    this.segundaNota = segundaNota
  }

    nomeCompleto() {  
        return (primeiroNome + " " + segundoNome);  
    }

    media() {  
        return (primeiraNota * 0,6) + (segundaNota * 0,4);  
    }
}

var media

let aluno1 = new Aluno("Victor", "LaCorte", 10, 8);
let aluno2= new Aluno("Thais", "Costa", 8, 6);
let aluno3 = new Aluno("Joao", "Silva", 7, 10);
let aluno4 = new Aluno("Cleber", "Santos", 10, 10);
let aluno5 = new Aluno("Vanessa", "Ribeiro", 4, 3);

var alunos =  [aluno1,aluno2,aluno3,aluno4,aluno5]

for (var i=0; i < alunos.length; i++){
  media = alunos[i].primeiraNota*0.6 + alunos[i].segundaNota*0.4
  alert(alunos[i].primeiroNome + " " + alunos[i].segundoNome +"\nPrimeira Nota: "+ alunos[i].primeiraNota +"\nSegunda Nota: " + alunos[i].segundaNota + "\nMedia: " + media)
  if(media > 6)
    alert("Aprovado")
  else
    alert("Reprovado")
}

