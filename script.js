// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
let gender = process.argv[2]; // Genero 
let height = process.argv[3]; // Altura
let barReps = process.argv[4]; // Repetições com barra
let barSeconds = process.argv[5]; // Tempo das repetições com barra 
let abs = process.argv[6]; // Abdominais
let runDistance = process.argv[7]; // Distância da corrida
let runTime = process.argv[8]; // Tempo da corrida
let swimDistance = process.argv[9]; // Distância da natação
let swimTime = process.argv[10]; // Tempo da natação
let diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

/*
    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar:
    if (gender === "male")
    ...
*/
// **sua lógica a partir daqui**

if(gender === "male"){  //se o gênero for masculino (true) vai executar a proxima condicional
    if(height >= 1.70){ //se a altura for maior ou igual a 1.70 vai executar a proxima condicional
    
        if(barReps >= 6 || barSeconds >= 15){  //repetições de barra e em quantos segundos

            if(abs >= 41){  //maior ou igual a 41 abdominais

                if(runDistance >= 3000 && runTime <= 720 ||  //distância percorida e quantos segundos
                    runDistance >= 5000 && runTime <= 1200){

                    if(swimDistance >= 100 && swimTime <= 60 || diveTime <= 30){ //distância á nado e quantos segundos
                        passed = true;  //se passou em todos os requisitos vai ter true
                    }
                }
            }
        }
    }
}
    else if (gender === "female"){ // Genero
        if(height >= 1.60){ // Altura

            if(barReps >= 5 || barSeconds >= 12){ // Repetições com barra ou Tempo das repetições com barra

                if(abs >= 41){ // Abdominais

                    if(runDistance >= 4000 && runTime <= 900 || 
                    runDistance >= 6000 && runTime <= 1320){ // Distância da corrida ou Tempo da corrida

                        if(swimDistance >= 100 && swimTime <= 60 || 
                        diveTime <= 30){ // Distância da natação Tempo da natação Tempo de mergulho
                        passed = true;
                        }
                    } 
                }
            }
        }
    }else{
    passed = false; // se não passou em todos os requisitos vai ser false
    }

/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed);
