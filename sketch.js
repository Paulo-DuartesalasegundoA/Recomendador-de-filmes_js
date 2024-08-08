// Idade 18 anos:
// 1) As tranças do Careca, romance
// 2) Bastardos Inglórios, ação
// 3) Annabelle, terror

// Idade 12 anos:
// 1) As branquelas, romance
// 2) Coraline e o Mundo Secreto, terror
// 3) Carros, ação

// Idade livre:
// 1) Enrolados, romance
// 2) Orion e o Escuro, terror
// 3) Carros, ação

let campoIdade;
let campoAcao;
let campoTerror;
let campoRomance;
let filme;

function setup() {
  createCanvas(600, 400);
  createElement('h2','Recomendador de Filmes')
  createSpan('Idade: ')
  campoIdade = createInput("15");
  createElement('h4', 'Escolha somente um gênero:')
  campoAcao = createCheckbox('Ação');
  campoTerror = createCheckbox('Terror');
  campoRomance = createCheckbox('Romance');
  
}

function draw() {
  background('pink');
  textAlign(CENTER, CENTER);
  textSize(40);
  fill('purple')
  
  let idade = campoIdade.value();
  let acao = campoAcao. checked();
  let terror = campoTerror. checked();
  let romance = campoRomance. checked();
  
  filme = geraRecomendacao(idade, acao, terror, romance);
  
  text(filme, width/2, height/2);
}

function geraRecomendacao(idade, acao, terror, romance){
    if(idade >= 18){
      if(acao){
        return 'Bastardos Inglórios'
      } else 
      if(romance){
        return 'As tranças do careca'
      } else
      if(terror){
        return 'Annabelle'
      }
  }else if(idade >= 12){
      if(acao){
        return 'Carros'
      } else
      if(romance){
        return 'As branquelas'
      } else
      if(terror){
        return 'Coraline e o Mundo Secreto'
      }  
  }else if(idade < 12){ 
    if(acao){
        return 'Carros'
      } else
      if(romance){
        return 'Enrolados'
      } else
      if(terror){
        return 'Orion e o Escuro'
      }
  }else{
    return 'Carros'
  }
  
}
