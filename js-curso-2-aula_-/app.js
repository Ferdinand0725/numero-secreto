let listaDeNumerosSorteados= [];
let numeroLimite=10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

                                        //let titulo= document.querySelector('h1');
                                        //titulo.innerHTML=' Jogo do numero secreto';

                                         //let paragrafo= document.querySelector('p');
                                         //paragrafo.innerHTML='Escolha um numero entre 1 e 10';

function exibirTextoNaTela (tag,texto ) {       // funçao com paramentro
   let campo= document.querySelector(tag) 
    campo.innerHTML=texto
   responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2}); //recurso de voz,esse rate é a velocidade da fala  
}
                                         //onde tiver tag e texto sera substituido por h1 e Jogodonumerosecreto
                                        // usado para nao repetir codigos muito parecidos 

function mensagemInicial(){
   exibirTextoNaTela('h1','Jogo do numero secreto');
   exibirTextoNaTela('p','Escolha um numero entre 1 e 10')  
};
mensagemInicial()

function verificarChute(){ // funçao sem retorno e parametro 
     let chute = document.querySelector('input').value;
     console.log (numeroSecreto);
     if(chute==numeroSecreto){ 
       exibirTextoNaTela('h1','Acertou!')
       let palavraTentativa = tentativas>1? 'tentativas': 'tentativa';
       let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
       exibirTextoNaTela('p',mensagemTentativas)
       document.getElementById('reiniciar').removeAttribute('disabled');
     }
     else{
         if( chute>numeroSecreto){
            exibirTextoNaTela('p','O numero secreto é menor.')}
            else{
               exibirTextoNaTela('p','O numero secreto é maior.')
            }; 
            tentativas++;
         limparCampo()
     }  ;
} ;
function gerarNumeroAleatorio(){
   let numeroEscolhido=parseInt(Math.random()* numeroLimite + 1) 
   let quantidadeDeNumerosSorteadosNaLista=listaDeNumerosSorteados.length
   if(quantidadeDeNumerosSorteadosNaLista ==numeroLimite ){
      listaDeNumerosSorteados=[]
   };
   if(listaDeNumerosSorteados.includes(numeroEscolhido)){  
   return gerarNumeroAleatorio() // caso o numero escolhido esteja na lista,é gerado outro numero aleatorio
   } 
   else{
      console.log(listaDeNumerosSorteados)
      listaDeNumerosSorteados.push(numeroEscolhido) //aqui caso o numero escolhido nao esteja na lista,o .push adciona ele na lista
   return numeroEscolhido
   }
   // includes é para saber se o numero ja esta na lista 
};
function limparCampo(){
   chute= document.querySelector('input');
   chute.value=''
};
function reiniciarJogo(){
   numeroSecreto= gerarNumeroAleatorio();
   limparCampo();
   tentativas=1
   mensagemInicial()
   document.getElementById('reiniciar').setAttribute('disabled',true)
}

