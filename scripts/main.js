let seatch_input = document.querySelector('#search_input')
var botao = document.getElementById('button_');
var corpo_tabela = document.querySelector('tbody');
let contato = null;

let tableContact = document.getElementById('Contatos')

let pagAtual = 'TODOS'

let contacts = [{
        id: 1,    
        image: 'assets/img/pessoa1.jpg',
        name: 'Lorraine',
        email: 'lorraine.beck22@example.com',
        cell: '(960) - 861-1890',
        city:'Uberlandia - MG',
        status: 'TODOS'
    },

    {
        id: 2,
        image: 'assets/img/pessoa2.jpg',
        name: 'Lorem',
        email: 'loremipsum@mail.com',
        cell: '(960)-861-1890',
        city: '	Uberlândia - MG',
        status: 'ATENDIDOS'
    },
    {
        id: 3,
        image: 'assets/img/pessoa3.jpg',
        name: 'Dolor',
        email: 'dolorsit123@mail.com',
        cell: '(960)-861-1890',
        city: 'São Paulo - SP',
        status: 'LIXEIRA'
    },
    {
        id: 4,
        image: 'assets/img/pessoa4.jpg',
        name: 'Consectut',
        email: 'consectutor123@mail.com',
        cell: '(960)-861-1890',
        city: '	Uberlândia - MG',
        status: 'TODOS'
    },
    {
        id: 5,
        image: 'assets/img/pessoa5.jpg',
        name: 'Elit',
        email: 'elitamet@mail.com',
        cell: '(960)-861-1890',
        city: '	Uberlândia - MG',
        status: 'TODOS'
    },
    {
        id: 6,
        image: 'assets/img/pessoa1.jpg',
        name: 'Adipiscing',
        email: 'adipiscing@mail.com',
        cell: '(960)-861-1890',
        city: '	São Paulo - SP',
        status: 'TODOS'
    },
    {
        id: 7,
        image: 'assets/img/pessoa2.jpg',
        name: 'Ipsum',
        email: 'ipsumdolor12345@mail.com',
        cell: '(960)-861-1890',
        city: '	Uberlândia - MG',
        status: 'TODOS'
    },
    {
        id: 8,
        image: 'assets/img/pessoa2.jpg',
        name: 'Beck Elit',
        email: 'beckelitsit@mail.com',
        cell: '(960)-861-1890',
        city: '	Uberlândia - MG',
        status: 'TODOS'
    },
]

let btnTodos = document.getElementById('btnTodos');
btnTodos.addEventListener('click', function() {renderList(contacts, 'TODOS')})

let btnAtendidos = document.getElementById('btnAtendidos');
btnAtendidos.addEventListener('click', function() {renderList(contacts, 'ATENDIDOS')})

let btnLixeira = document.getElementById('btnLixeira');
btnLixeira.addEventListener('click', function() {renderList(contacts, 'LIXEIRA')})

 //FUNÇÃO PARA SALVAR NO LOCALSTORAGE
 localStorage.setItem('contact', JSON.stringify(contacts));
//  getItemLocalStorage("contact");
//  alert(getItemLocalStorage("contact"));
 console.log(window.localStorage.getItem(contacts));
  

renderList(contacts, 'TODOS');


function enviarLixeira(id) {
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
   //ele sempre. É a memsa funçção.Então, devo passar o status ali na linha 104 e comparar/ jogar na linha 108. 
   //Daí no enviar lixeira vou ter que passar o Status que eu quero. linha 139. Chamaando o enviar lixeira? Não, agr ele vai ser o changeStatus
   //  changeStatus, vai ser único, global. Porq agora eu vou querer filtrar o status, alteraro status, para o parametro qu eu to passando.
   //Então, no enviar lixeira vou passar o status pra ele. //Adicionar 'LIXEIRA' no parametro da linha 139. 
   
   

//FUNÇÃO MAP PARA PERCORRER TODO O ARRAY E RETORNAR OS OBJETOS
function renderList(list, status) {
    pagAtual = status
    let trList = list.filter(item => item.status === status);

    tableContact.innerHTML = trList.map((contacts) => {
        console.log(contacts)
        return `
        <tr id="tabela">
               <td id="tabela_linha_1"><img  onclick="inforUser(${contacts.id})" src="${contacts.image}" alt="imagem" class="fotos"/></td> 
                <td class="name" id="name">${contacts.name}</td>
                <td id="email">${contacts.email}</td>
                <td>${contacts.cell}</td>
                <td>${contacts.city}</td>
                <td colspan="3" id="button_">
                <button type="button" class="trash iconsTable" id="enviar_lixeira" value="remover" 
                onclick="enviarLixeira(${contacts.id})"></button type="button">
                <button type="button" class="todos iconsTable" id=""></button type="button">
                <button type="button" class="check2 iconsTable" id=""></button>
                            
                </td>
        </tr>  
        `
    }).join('')
}

// Função para abrir a tela de informações do contato e voltar para a tela da tabela. 
function inforUser(id = null){
         if(id){
            var gridHtml = document.querySelector('.grid-html');
            gridHtml.style.display = 'none';
   
           var containerDados = document.querySelector('.bodyInfor');
           containerDados.style.display = 'initial';
            //Pega o nome do contato. 
           contato = contacts.find(item => item.id == id)
           document.querySelector(".titulo").innerHTML = contato.name;
            
           
             
         }else{
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