let y = 1;
let qtdAluno = 0
let row
let x = 5
let nomeAluno = "";
let nomes = [];
let mediaList = [];
let mediaGeral = 0;

var table = document.getElementById("table");

let cellsNumber = 7;

// Função para verificar as médias
function verificaMedias(){
    nomes = []
    mediaList = []
    let mediaGeral = 0
    let media = 0

    for(let y = 1; y <= qtdAluno; y = y + 1){
        let resultado = 0
        for(let x = 1; x <= (cellsNumber - 3); x = x + 1){
           let nota = parseFloat(document.getElementById(`nota${y}${x}`).value);
            resultado = nota + resultado;
        }
        let media = resultado/(cellsNumber-3)
        document.getElementById(`media${y}`).innerText = media
        if(media >= 50){
            document.getElementById(`situacao${y}`).innerText = "Aprovado"
            document.getElementById(`situacao${y}`).style.color = "Green"
        }
        else if (media >= 40 && media < 50){
            document.getElementById(`situacao${y}`).innerText = "Recuperação"
            document.getElementById(`situacao${y}`).style.color = "orange"
        }
        else if (media < 40){
            document.getElementById(`situacao${y}`).innerText = "Reprovado"
            document.getElementById(`situacao${y}`).style.color = "red"
        }

        mediaGeral += media;


        nomeAluno = document.getElementById(`aluno${y}`).value;
        mediaAluno = document.getElementById(`media${y}`).value;



        nomes.push(nomeAluno);
        mediaList.push(mediaAluno);
    }
    mediaFinal = mediaGeral/qtdAluno

}

function media_geral(){
    
    document.getElementById("Media_Final").innerText = "Média geral da turma: " + mediaFinal
}

// Função para adicionar Aluno
function adicionar_aluno(){
    let y = qtdAluno
    if(qtdAluno < 10){
    var table = document.getElementById("table");
    let x = 1;
    var row = table.insertRow(qtdAluno+1);
    row.insertCell(0).innerHTML = `<input id = "aluno${y+1}" type="text" class = "form-control" placeholder="Nome"> `;
    for(x; x < cellsNumber - 2; x++){
        row.insertCell(x).innerHTML  = `<input id = "nota${y+1}${x}" type="text" class = "form-control" placeholder="Nota ${x}"> `;
    }
    row.insertCell(x).innerHTML = `<output id = "media${y+1}"></output> `;
    row.insertCell(x+1).innerHTML = `<output id = "situacao${y+1}"></output> `;
    qtdAluno = qtdAluno + 1
    y = y + 1
}
    else{
        alert("Quantidade máxima de alunos atingida")
    }
}

// Função para adicionar nota.
function adicionar_nota(){
    var myTable = document.getElementById("table")
    if(qtdAluno == 0){
        if(cellsNumber-3 < 6){
        let x = cellsNumber-2
        var rowTitle = document.getElementById("title");
        rowTitle.insertCell(x).innerHTML = `<td><b>Nota ${x}</b></td>`
        cellsNumber = cellsNumber + 1
        cont = cont - 1
        }
        else{
            alert("Quantidade máxima de notas atingidas")
        }
    }
    else{
        if(cellsNumber-3 < 6){
        var rowTitle = document.getElementById("title");
        let x = cellsNumber-2
        rowTitle.insertCell(x).innerHTML = `<td><b>Nota ${x}</b></td>`
        cellsNumber = cellsNumber + 1
        x++
            let y = 0
            for(let y = 1; y <= qtdAluno; y++){
                myTable.rows[y].insertCell(cellsNumber - 3).innerHTML = `<input id = "nota${y}${cellsNumber - 3}" type="text" class = "form-control" placeholder="Nota ${cellsNumber-3}"> `;
            }

        }
        else{
        alert("Quantidade máxima de notas atingidas")
        }
    }
}

// Função apagar aluno.
function apagar_aluno(){
    let y = qtdAluno
    if(qtdAluno >= 1){
    document.getElementById("table").deleteRow(y);
    qtdAluno = qtdAluno - 1
    y = y - 1
    }
    else{
        alert("Não tem mais alunos para apagar")
    }
}

// Função para apagar nota
function apagar_nota(){
    let linhas = qtdAluno
    var myTable = document.getElementById("table")
    if (qtdAluno == 0){
    if (cellsNumber-3 > 1){
    document.getElementById("title").deleteCell(cellsNumber - 3);
    cellsNumber = cellsNumber - 1
    }
    else{
        alert("Sem notas para apagar")
    }
}
    else{
        if(cellsNumber-3>1){
         document.getElementById("title").deleteCell(cellsNumber - 3);
        while(linhas > 0){
          myTable.rows[linhas].deleteCell(cellsNumber-3); 
        linhas = linhas - 1
        }
        cellsNumber = cellsNumber - 1 
    }
    
        else{
        alert("Sem notas para apagar")
        }
}

}

// Função para ordem crescente
function ordemCrescente(){
    //Cria o array de lista
    let lista = [];
    for (let cont = 0; cont < qtdAluno; cont += 1){
       //Cria a pessoa 1
        let pessoa = {
        nome: nomes[cont],
        media: mediaList[cont]
        };
        
        lista.push(pessoa);
    }
    //Ordena as lista de acordo com a média da pessoa.
    lista.sort((a,b) => a.media - b.media);
    //Imprime o array ordenado por media
    imprimirArray('spanOrdenadaPorMedia', lista);

    document.getElementById("Media_Final").innerText = "";
}

// Função para ordem decrescente
function ordemDecrescente(){
    //Cria o array de lista
    let lista = [];
    for (let cont = 0; cont < qtdAluno; cont += 1){
       //Cria a pessoa 1
        let pessoa = {
        nome: nomes[cont],
        media: mediaList[cont]
        };
        
        lista.push(pessoa);
    }
    //Ordena as lista de acordo com a média da pessoa
    lista.sort((a, b) => b.media - a.media);
    //Imprime o array ordenado por media
    imprimirArray('spanOrdenadaPorMedia', lista);

    document.getElementById("Media_Final").innerText = "";
    }

// Função para imprimir array
function imprimirArray(id, array) {
    let span = document.getElementById(id);
    span.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        span.innerHTML += "<b>Aluno:</b> " + array[i].nome + '<br><b>Média:</b> ' + array[i].media + '<br/><br>';
    }
}


function ordem(){
    let lista = [];
    for (let cont = 0; cont < qtdAluno; cont += 1){
       //Cria a pessoa 1
        let pessoa = {
        nome: nomes[cont],
        media: mediaList[cont]
        };
        
        lista.push(pessoa);
    }
    lista.sort(function(a, b) {
        if(a.nome < b.nome) {
          return -1;
        } else {
          return true;
        }
      });  
      
      imprimirArray1('ordem_alfabetica', lista);
}


function imprimirArray1(id, array) {
    let span = document.getElementById(id);
    span.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        span.innerHTML += array[i].nome + ', Média: ' + array[i].media + '<br/>';
    }
}
