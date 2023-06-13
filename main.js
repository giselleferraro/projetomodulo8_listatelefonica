const form = document.getElementById('form-lista');
const contato = [];
const telefone =[];

let linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha (){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if(contato.includes(inputNomeContato.value)){
        alert(`O contato "${inputNomeContato.value}" já foi inserido. `);
    }else{

    contato.push(inputNomeContato.value);
    telefone.push(inputNumeroContato.value);

    let linha = '<tr>'
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `</tr>`

    linhas += linha
    }

    inputNomeContato.value ='';
    inputNumeroContato.value = '';
}

function atualizaTabela (){
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}