let seatch_input = document.querySelector('#search_input')
var botao = document.getElementById('button_');
var corpo_tabela = document.querySelector('tbody');


let tableContact = document.getElementById('Contatos')


let contact = [{
        id: 1,    
        image: 'img/pessoa1.jpg',
        name: 'Lorraine',
        email: 'lorraine.beck22@example.com',
        cell: '(960) - 861-1890',
        city:'Uberlandia - MG',
        status: 'TODOS'
    },

    {
        id: 2,
        image: 'img/pessoa2.jpg',
        name: 'Lorem',
        email: 'loremipsum@mail.com',
        cell: '(960)-861-1890',
        city: '	Uberlândia - MG',
        status: 'ATENDIDOS'
    },
    {
        id: 3,
        image: 'img/pessoa3.jpg',
        name: 'Dolor',
        email: 'dolorsit123@mail.com',
        cell: '(960)-861-1890',
        city: 'São Paulo - SP',
        status: 'TODOS'
    },
    {
        id: 4,
        image: 'img/pessoa4.jpg',
        name: 'Consectut',
        email: 'consectutor123@mail.com',
        cell: '(960)-861-1890',
        city: '	Uberlândia - MG',
        status: 'LIXEIRA'
    },
]

let btnTodos = document.getElementById('btnTodos');
btnTodos.addEventListener('click', function() {renderList(contact, 'TODOS')})

let btnAtendidos = document.getElementById('btnAtendidos');
btnAtendidos.addEventListener('click', function() {renderList(contact, 'ATENDIDOS')})

let btnLixeira = document.getElementById('btnLixeira');
btnLixeira.addEventListener('click', function() {renderList(contact, 'LIXEIRA')})

 //FUNÇÃO PARA SALVAR NO LOCALSTORAGE
 localStorage.setItem('contact', JSON.stringify(contact));
//  getItemLocalStorage("contact");
//  alert(getItemLocalStorage("contact"));
 console.log(window.localStorage.getItem(contact));
  

renderList(contact, 'TODOS');

function enviarLixeira(id) {
    console.log(id);
    contact = contact.map(item => {
        if(item.id === id) {
            return {...item, status: 'LIXEIRA'}
        } 
        return item;
    })

    renderList(contact, 'TODOS')
}
  
//FUNÇÃO MAP PARA PERCORRER TODO O ARRAY E RETORNAR OS OBJETOS
function renderList(list, status) {
    let trList = list.filter(item => item.status === status);

    tableContact.innerHTML = trList.map((contact) => {
        console.log(contact)
        return `
        <tr id="tabela">
               <td id="tabela_linha_1"><img src="${contact.image}" alt="imagem" class="fotos"/></td> 
                <td class="name" id="name">${contact.name}</td>
                <td id="email">${contact.email}</td>
                <td>${contact.cell}</td>
                <td>${contact.city}</td>
                <td colspan="3" id="button_">
                <button type="button" class="trash iconsTable" id="enviar_lixeira" value="remover" 
                onclick="enviarLixeira(${contact.id})"></button type="button">
                <button type="button" class="todos iconsTable" id=""></button type="button">
                <button type="button" class="check2 iconsTable" id=""></button>
                            
                </td>
        </tr>  
        `
    }).join('')
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


//  //Iniciando a função de remover linha da tabela
//  function removeLinha(id){
//     teste = document.getElementById(id);
//     teste.parentNode.parentNode.removeChild(teste.parentNode);
//  }



// __________________________________________________________________________

// var removeLinha = document.getElementById('enviar_lixeira');

// document.getElementById('enviar_lixeira').addEventListener('click', myFunction);

// function myFunction(){
//     document.getElementById('tabela_linha_1').closest('enviar_lixeira');
// }