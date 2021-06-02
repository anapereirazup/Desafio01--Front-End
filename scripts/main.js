let seatch_input = document.querySelector('#search_input')
var botao = document.getElementById('button_');
var corpo_tabela = document.querySelector('tbody');
let contato = null;

let tableContact = document.getElementById('Contatos')
let pagAtual = 'TODOS'
let pessoaAtual = null


let contacts = [{
        id: 1,    
        image: 'assets/img/pessoa1.jpg',
        name: 'Lorraine',
        email: 'lorraine.beck22@example.com',
        cell: '(960) - 861-1890',
        city:'Belo Horizonte - MG',
        status: 'TODOS',
        niver: '6/07/1998',
        password: '1030',
    },

    {
        id: 2,
        image: 'assets/img/pessoa2.jpg',
        name: 'Lorem',
        email: 'loremipsum@mail.com',
        cell: '(960)-861-1890',
        city: '	Uberlândia - MG',
        status: 'TODOS',
        niver: '6/07/1999',
        password: '1031',
    },
    {
        id: 3,
        image: 'assets/img/pessoa3.jpg',
        name: 'Ricardo',
        email: 'dolorsit123@mail.com',
        cell: '(960)-861-1890',
        city: 'São Paulo - SP',
        status: 'TODOS',
        niver: '6/07/2000',
        password: '1032',
    },
    {
        id: 4,
        image: 'assets/img/pessoa4.jpg',
        name: 'Consectut',
        email: 'consectutor123@mail.com',
        cell: '(960)-861-1890',
        city: '	Uberlândia - MG',
        status: 'TODOS',
        niver: '6/07/2001',
        password: '1033',
    },
    {
        id: 5,
        image: 'assets/img/pessoa5.jpg',
        name: 'Elit',
        email: 'elitamet@mail.com',
        cell: '(960)-861-1890',
        city: '	Uberlândia - MG',
        status: 'ATENDIDOS',
        niver: '6/07/2002',
        password: '1034',
    },
    {
        id: 6,
        image: 'assets/img/pessoa1.jpg',
        name: 'Adipiscing',
        email: 'adipiscing@mail.com',
        cell: '(960)-861-1890',
        city: '	São Paulo - SP',
        status: 'LIXEIRA',
        niver: '6/07/2003',
        password: '1035',
    },
    {
        id: 7,
        image: 'assets/img/pessoa2.jpg',
        name: 'Ipsum',
        email: 'ipsumdolor12345@mail.com',
        cell: '(960)-861-1890',
        city: '	Uberlândia - MG',
        status: 'TODOS',
        niver: '6/07/2004',
        password: '1036',
    },
    {
        id: 8,
        image: 'assets/img/pessoa2.jpg',
        name: 'Beck',
        email: 'beckelitsit@mail.com',
        cell: '(960)-861-1890',
        city: '	Belo Horizonte - MG',
        status: 'TODOS',
        niver: '6/07/2005',
        password: '1037',
    },
]
//VARIAVÉIS REFERENTE AO MENU LATERAL ESQUERDO
let btnTodos = document.getElementById('btnTodos');
btnTodos.addEventListener('click', function() {renderList(contacts, 'TODOS')})

let btnAtendidos = document.getElementById('btnAtendidos');
btnAtendidos.addEventListener('click', function() {renderList(contacts, 'ATENDIDOS')})

let btnLixeira = document.getElementById('btnLixeira');
btnLixeira.addEventListener('click', function() {renderList(contacts, 'LIXEIRA')})

//FUNÇÕES PARA CARREGAR INFORMAÇÕES COM O EVENTO MOUSEOVER
let btnEmail = document.getElementById('email');
 btnEmail.addEventListener('mouseover', function() {

    carregarInfo({
        frase: "My email address is ",
        id: pessoaAtual,
        messageProperty: "email"
    });
})
let btnData = document.getElementById('calendario');
 btnData.addEventListener('mouseover', function() {

     carregarInfo({
        frase: "My birthday is",
        id: pessoaAtual,
        messageProperty: "niver"
    });
})

let btnGeo = document.getElementById('geo');
 btnGeo.addEventListener('mouseover', function() {
     
     carregarInfo({
        frase: "My address is ",
        id: pessoaAtual,
        messageProperty: "city"
    });
})

let btnTelefone = document.getElementById('telefone');
 btnTelefone.addEventListener('mouseover', function() {
     
     carregarInfo({
        frase: "My phone number is ",
        id: pessoaAtual,
        messageProperty: "cell"
    });
})

let btnChave = document.getElementById('chave');
 btnChave.addEventListener('mouseover', function() {

    carregarInfo({
        frase: "My password is",
        id: pessoaAtual,
        messageProperty: "password"
    });
})
//FUNÇÃO GLOBAL. 
function carregarInfo(form){
    contato = contacts.find(item => item.id == form.id);
    console.log("contato", contato);
    document.querySelector(".titulo").innerHTML = `<div>${form.frase}</div> ${contato[form.messageProperty]}`; 
  }


 //FUNÇÃO PARA SALVAR NO LOCALSTORAGE
 localStorage.setItem('contact', JSON.stringify(contacts));
 console.log(window.localStorage.getItem(contacts));
  
renderList(contacts, 'TODOS');

//Pegando o status inicial, e modiicando para lixeira, e renderizando a pagina atual que é o status no qual o usuario está.
function enviarLixeira(id, status) {
    console.log(id);
    contacts = contacts.map(item => {
        if(item.id === id) {
            return {...item, status: 'LIXEIRA'}
        } 
        return item;
    })

    renderList(contacts,  pagAtual)
}
   //NÃO COPIAR A FUNCTION ENVIAR LIXEIRA 3 VEZES. Esquema de conseguir encapsular, conseguir deixa o mais simples possivel e unico, para poder aproveitar
   //ele sempre. É a mesma função.Então, devo passar o status ali na linha 104 e comparar/ jogar na linha 108. 
   //Daí no enviar lixeira vou ter que passar o Status que eu quero. linha 139. Chamando o enviar lixeira. Não, agr ele vai ser o changeStatus
   //  changeStatus, vai ser único, global. Porq agora eu vou querer filtrar o status, alterar o status, para o parametro qu eu to passando.
   //Então, no enviar lixeira vou passar o status pra ele. //Adicionar 'LIXEIRA' no parametro da linha 139. 
   
   function enviarTodos(id) {
    console.log(id);
    contacts = contacts.map(item => {
        if(item.id === id) {
            return {...item, status: 'TODOS'}
        } 
        return item;
    })

    renderList(contacts,  pagAtual)
}  
function enviarAtendidos(id) {
    console.log(id);
    contacts = contacts.map(item => {
        if(item.id === id) {
            return {...item, status: 'ATENDIDOS'}
        } 
        return item;
    })

    renderList(contacts,  pagAtual)
}  
//Função que está renderizando a pagina, no qual ele pega o item e verifica o status, se for === o status ele manda. A variavel pagAtual, é uma variavel global, no qual ela "é"
//o status.
function renderList(list, status) {
    pagAtual = status
    let trList = list.filter(item => item.status === status);
    
//FUNÇÃO MAP PARA PERCORRER TODO O ARRAY E RETORNAR OS OBJETOS
    tableContact.innerHTML = trList.map((contacts) => {
        console.log(contacts)
        return `
        <tr id="tabela">
               <td id="tabela_linha_1"><img  onclick="inforUser(${contacts.id}, this)" src="${contacts.image}" alt="imagem" class="fotos"/></td> 
                <td class="name" id="name">${contacts.name}</td>
                <td id="email">${contacts.email}</td>
                <td>${contacts.cell}</td>
                <td>${contacts.city}</td>
                <td colspan="3" id="button_">
                <button type="button" class="trash iconsTable" id="enviar_lixeira" value="remover" onclick="enviarLixeira(${contacts.id})"></button type="button">
                <button type="button" class="todos iconsTable" id="enviar_todos" value="todos" onclick="enviarTodos(${contacts.id})"></button type="button">
                <button type="button" class="check2 iconsTable" id="enviar_atendidos" value="atendidos" onclick="enviarAtendidos(${contacts.id})"></button type="button">
                            
                </td>
        </tr>  
        `
    }).join('')
}

// Função para abrir a tela de informações do contato e voltar para a tela da tabela. 
function inforUser(id = null){
         if(id){
            pessoaAtual = id 
           var gridHtml = document.querySelector('.grid-html');
           gridHtml.style.display = 'none';
   
           var containerDados = document.querySelector('.bodyInfor');
           containerDados.style.display = 'initial';

           //Pega o nome do contato.   EU ACHO QUE NÃO DEVERIA ESTAR AQUI 
           contato = contacts.find(item => item.id === id)
            document.querySelector(".titulo").innerHTML =  `<div>Hi, my name is </div>` + contato.name;  
  }

        else{
             var gridHtml = document.querySelector('.grid-html');
             gridHtml.style.display = 'grid';
    
             var containerDados = document.querySelector('.bodyInfor');
             containerDados.style.display = 'none';
           }
}





//EVENTO PARA AÇÕES DO TECLADO
seatch_input.addEventListener('keyup', function(e) {
    console.log(e.target.value.toLowerCase())
    let search_item = (e.target.value.toLowerCase())
    let name = document.querySelectorAll('.table .name')
    

    name.forEach((item) => {
        if (item.textContent.toLowerCase().indexOf(search_item) != -1){
            item.closest('tr').style.display = 'table-row';
        } else {
            item.closest('tr').style.display = 'none'
        }
    })
    
})