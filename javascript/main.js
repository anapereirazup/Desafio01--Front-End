let seatch_input = document.querySelector('#search_input')
var botao = document.getElementById('button_');
var corpo_tabela = document.querySelector('tbody');

let contact = [{
        image: 'img/pessoa1.jpg',
        name: 'Lorraine',
        email: 'lorraine.beck22@example.com',
        cell: '(960) - 861-1890',
        city:'Uberlandia - MG'
    },

    {
        image: 'img/pessoa2.jpg',
        name: 'Lorem',
        email: 'loremipsum@mail.com',
        cell: '(960)-861-1890',
        city: '	Uberlândia - MG'
    },
    {
        image: 'img/pessoa3.jpg',
        name: 'Dolor',
        email: 'dolorsit123@mail.com',
        cell: '(960)-861-1890',
        city: 'São Paulo - SP'
    },
    {
        image: 'img/pessoa4.jpg',
        name: 'Consectut',
        email: 'consectutor123@mail.com',
        cell: '(960)-861-1890',
        city: '	Uberlândia - MG'
    },
    {
        image: 'img/pessoa5.jpg',
        name: 'Elit',
        email: 'elitamet@mail.com',
        cell: '(960)-861-1890',
        city: '	São Paulo - SP'
    },
    {
        image: 'img/pessoa1.jpg',
        name: 'Adipiscing',
        email: 'adipiscing@mail.com',
        cell: '(960)-861-1890',
        city: '	São Paulo - SP'
    },
    {
        image: 'img/pessoa2.jpg',
        name: 'Ipsum',
        email: 'ipsumdolor@mail.com',
        cell: '(960)-861-1890',
        city: '	Uberlândia - MG'
    },
    {
        image: 'img/pessoa3.jpg',
        name: 'Beck Elit',
        email: 'beckelitsit@mail.com',
        cell: '(960)-861-1890',
        city: '	Belo Horizonte - BH'
    },
    {
        image: 'img/pessoa4.jpg',
        name: 'Lorem',
        email: 'loremipsum@mail.com',
        cell: '(960)-861-1890',
        city: '	São Paulo - SP'
    },
]
 //FUNÇÃO PARA SALVAR NO LOCALSTORAGE
 localStorage.setItem('contact', JSON.stringify(contact));
//  getItemLocalStorage("contact");
//  alert(getItemLocalStorage("contact"));
 console.log(window.localStorage.getItem(contact));
  
  
//FUNÇÃO MAP PARA PERCORRER TODO O ARRAY E RETORNAR OS OBJETOS
document.getElementById('Contatos').innerHTML = contact.map((contact) => {
    console.log(contact)
    return `
    <tr id="tabela">
           <td id="tabela_linha_1"><img src="${contact.image}" alt="imagem" class="fotos"/></td> 
            <td class="name" id="name">${contact.name}</td>
            <td id="email">${contact.email}</td>
            <td>${contact.cell}</td>
            <td>${contact.city}</td>
            <td colspan="3" id="button_">
            <button type="button" class="trash iconsTable" id="enviar_lixeira" value="remover" onclick="javascript:removeLinha('tabela_linha_1')"></button type="button">
            <button type="button" class="todos iconsTable" id=""></button type="button">
            <button type="button" class="check2 iconsTable" id=""></button>
                        
            </td>
    </tr>  
    `
}).join('')

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