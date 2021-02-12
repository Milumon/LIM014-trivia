// obtener el valor del username 
let username;

function nextOne() {
    // Asignando el valor del nameInput a la variable username.    
    username = document.getElementById("nameInput").value;
    // Asignando el valor de username al elemento con id "nameOutput", y convirtiendo la primera letra del username a mayuscula y trayendo el resto del username con .slice(). Name = ( N + ame)
    if (username) {
        document.getElementById('nameOutput').innerHTML = username[0].toUpperCase() + username.slice(1);
        // mostrar y ocultar
        boxOne.classList.replace("show", "hide");
        boxSelectCategory.classList.replace("hide", "show");
    } else {
        alert("Ingresa tu nombre por favor");
    }
}

// metodos para mostrar y ocultar div's 

function showCategoryA() {
    boxSelectCategory.classList.replace("show", "hide");
    categoryA.classList.replace("hide", "show");
}

function showCategoryB() {
    boxSelectCategory.classList.replace("show", "hide");
    categoryB.classList.replace("hide", "show");
}

function showBoxResult(event) {
 
    categoryA.classList.replace("show", "hide");
    boxResult.classList.replace("hide", "show");

    event.preventDefault();

    // Evaluando las respuesta /*  
    const answerOne = document.querySelector('input[name="answerOneA"]:checked').value;
    const answerTwo = document.querySelector('input[name="answerTwoA"]:checked').value;
    const answerThree = document.querySelector('input[name="answerThreeA"]:checked').value;  

    if (answerOne == "1") {
        document.getElementById('result1').innerHTML = "Correcto";
        result1.classList.replace("red", "green"); 

        counter++;

    } else {
        document.getElementById('result1').innerHTML = "Incorrecto";   
    }

    if (answerTwo == "1" ) {
        document.getElementById('result2').innerHTML = "Correcto";
        result2.classList.replace("red", "green");

        counter++;

    } else {
        document.getElementById('result2').innerHTML = "Incorrecto"; 
    }

    if (answerThree == "1") {
        document.getElementById('result3').innerHTML = "Correcto"; 
        result3.classList.replace("red", "green");

        counter++;

    } else {
        document.getElementById('result3').innerHTML = "Incorrecto"; 
    }
      console.log(counter+answerOne+answerTwo+answerThree);


    let correctAnswer1 = labels[1].textContent;
    let correctAnswer2 = labels[4].textContent;
    let correctAnswer3 = labels[6].textContent; 

    
document.getElementById('answer1').innerHTML = correctAnswer1;
document.getElementById('answer2').innerHTML = correctAnswer2;
document.getElementById('answer3').innerHTML = correctAnswer3;

document.getElementById('counter').innerHTML = counter+' de 3';
    
console.log(correctAnswer1+"<br>"+correctAnswer2+"<br>"+correctAnswer3);
}


var labels = document.getElementsByTagName("label"); 
let counter = 0; 

function showBoxResultB(event) {
 

    categoryB.classList.replace("show", "hide"); 
    boxResult.classList.replace("hide", "show");

    event.preventDefault();

    // Evaluando las respuesta /*  
    const answerOne = document.querySelector('input[name="answerOneB"]:checked').value;
    const answerTwo = document.querySelector('input[name="answerTwoB"]:checked').value;
    const answerThree = document.querySelector('input[name="answerThreeB"]:checked').value;   

    if (answerOne == "1") {
        document.getElementById('result1').innerHTML = "Correcto"; 
        result1.classList.replace("red", "green");

        counter++;

    } else {
        document.getElementById('result1').innerHTML = "Incorrecto"; 
    }

    if (answerTwo == "1" ) {
        document.getElementById('result2').innerHTML = "Correcto"; 
        result2.classList.replace("red", "green");
        counter++;
    } else {
        document.getElementById('result2').innerHTML = "Incorrecto"; 
    }

    if (answerThree == "1") {
        document.getElementById('result3').innerHTML = "Correcto"; 
        result3.classList.replace("red", "green");
        counter++; 

    } else {
        document.getElementById('result3').innerHTML = "Incorrecto";  
    }

    // Dando las respuestas correctas : 

    let correctAnswer1 = labels[11].textContent;
    let correctAnswer2 = labels[13].textContent;
    let correctAnswer3 = labels[15].textContent; 

    
document.getElementById('answer1').innerHTML = correctAnswer1;
document.getElementById('answer2').innerHTML = correctAnswer2;
document.getElementById('answer3').innerHTML = correctAnswer3;

document.getElementById('counter').innerHTML = counter+' de 3';

    
console.log(correctAnswer1+correctAnswer2+correctAnswer3);
}

function playAgain() {

  
    counter = 0;

    boxResult.classList.replace("show", "hide");
    boxSelectCategory.classList.replace("hide", "show");

    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "radio") {
            inputs[i].checked = false;
        }
    };

    // remover los estilos de rojo y verde en las respuestas despues de ser cambiados por la función showBoxResult 

    result1.classList.remove("green");
    result1.classList.remove("red");
    result2.classList.remove("green");
    result2.classList.remove("red");    
    result3.classList.remove("green");
    result3.classList.remove("red");

    // devolverlos a su estado inicial "red" para que el result#.classList.replace("red", "green"); funcione por segunda vez

    result1.classList.add("red");
    result2.classList.add("red");
    result3.classList.add("red");

} 

function returnHome() {

    document.getElementById("nameInput").value = "";
    counter = 0;

    boxResult.classList.replace("show", "hide");
    boxOne.classList.replace("hide", "show");

    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "radio") {
            inputs[i].checked = false;
        }
    };

    // remover los estilos de rojo y verde en las respuestas despues de ser cambiados por la función showBoxResult 

    result1.classList.remove("green");
    result1.classList.remove("red");
    result2.classList.remove("green");
    result2.classList.remove("red");    
    result3.classList.remove("green");
    result3.classList.remove("red");

    // devolverlos a su estado inicial "red" para que el result#.classList.replace("red", "green"); funcione por segunda vez

    result1.classList.add("red");
    result2.classList.add("red");
    result3.classList.add("red");

} 

//  Mostrar los resultados despues del submit

const formA = document.getElementById('formA');
formA.addEventListener('submit', showBoxResult);

const formB = document.getElementById('formB');
formB.addEventListener('submit', showBoxResultB);
  


