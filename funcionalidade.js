var operandoa;
var operandob;
var operação;

function init(){
	//variaveis
	var resultado = document.getElementById("resultado");
  var mais = document.getElementById('mais');
	var menos = document.getElementById('menos');
	var divisão = document.getElementById('divisão');
	var multiplicação = document.getElementById('multiplicação');
	var raiz = document.getElementById('raiz');
	var log = document.getElementById('log');
	var tan = document.getElementById('tan');
	var sen = document.getElementById('sen');
	var cos = document.getElementById('cos');
	var Ans = document.getElementById('Ans');
	var porcentagem = document.getElementById('porcentagem');
	var igual = document.getElementById('igual');
	var zero = document.getElementById('zero');
	var um = document.getElementById('um');
	var dois = document.getElementById('dois');
	var três = document.getElementById('três');
	var quatro = document.getElementById('quatro');
	var cinco = document.getElementById('cinco');
	var seis = document.getElementById('seis');
	var sete = document.getElementById('sete');
	var oito = document.getElementById('oito');
	var nove = document.getElementById('nove');
	var Pi = document.getElementById('Pi');
	var ponto = document.getElementById('ponto');
	var reset = document.getElementById('reset');

	//Eventos
	um.onclick = function(e){
		resultado.textcontent = resultado.textcontent + "1";
    }
  dois.onclick = function(e){
		resultado.textcontent = resultado.textcontent + "2";
    }
	três.onclick = function(e){
		resultado.textcontent = resultado.textcontent + "3";
    }
  quatro.onclick = function(e){
		resultado.textcontent = resultado.textcontent + "4";
    }  
  cinco.onclick = function(e){
		resultado.textcontent = resultado.textcontent + "5";
    }
	seis.onclick = function(e){
		resultado.textcontent = resultado.textcontent + "6";
    }
	sete.onclick = function(e){
		resultado.textcontent = resultado.textcontent + "7";
    }
	oito.onclick = function(e){
		resultado.textcontent = resultado.textcontent + "8";
    }
	nove.onclick = function(e){
		resultado.textcontent = resultado.textcontent + "9";
    }	
  zero.onclick = function(e){
		resultado.textcontent = resultado.textcontent + "0";
	  }

reset.onclick = function(e){
	reset();
}

mais.onclick = function(e){
    operandoa = resultado.textcontent;
    operação = "+";
  reset();
}
menos.onclick = function(e){
  operandoa = resultado.textcontent;
  operação = "-";
  reset();
}
multiplicação.onclick = function(e){
  operandoa = resultado.textcontent;
  operação = "*";
  reset();
}
divisão.onclick = function(e){
  operandoa = resultado.textcontent;
  operação = "/";
  reset();
}
igual.onclick = function(e){
  operandob = resultado.textcontent;
  resultado();
}

}
function limpar();
  resultado.textcontent = "";

}
function reset(){
  resultado.textcontent = "";
  operandoa = 0;
  operandob = 0;
  operação  = "";
}
function resolver(){
  var res = 0;
  switch(operação){
    case "+":
         res = parseFloat(operandoa) + parseFloat(operandob);
         break;
    case "-"
         res = parseFloat(operandoa) - parseFloat(operandob);
         break;
    case "*";
         res = parseFloat(operandoa) * parseFloat(operandob);
         break;
    case "/";
         res = parseFloat(operandoa) / parseFloat(operandob);
         break;
  }
}