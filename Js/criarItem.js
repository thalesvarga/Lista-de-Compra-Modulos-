import { verificarListaComprados } from "./verificarListaComprados.js";
import { editarItem } from "./editarItem.js";
import { gerirDiadaSemana } from "./gerirDiadaSemana.js";
import { removerItem } from "./removerItem.js";



const listaDeCompra = document.querySelector('#lista-de-compras');
const listaComprados = document.getElementById("lista-comprados");


let contador = 0

export function criarItem (formularioItem) {

    const liItemDaLista = document.createElement('li');
    const divContainerdaListaItem = document.createElement('div');
    divContainerdaListaItem.classList.add("lista-item-container");

    const divContainerNomedoItem = document.createElement('div');

    const divContainerCheckbox = document.createElement('div');
    divContainerCheckbox.classList.add('container-checkbox');

    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = "checkbox"
    inputCheckbox.classList.add("input-checkbox")
    inputCheckbox.id = "checkbox-" + contador++

    const labelCheckbox = document.createElement('label');
    labelCheckbox.setAttribute('for', inputCheckbox.id);

    labelCheckbox.addEventListener('click', function (evento){
    const inputCheckbox = evento.currentTarget.querySelector('.input-checkbox');
    const divCustomizadoCheckbox = evento.currentTarget.querySelector('.checkbox-customizado');
    const NomeDoItem = evento.currentTarget.closest('li').querySelector('#item-titulo');
    if (inputCheckbox.checked){
        divCustomizadoCheckbox.classList.add('checked');
        NomeDoItem.style.textDecoration = "line-through";
        listaComprados.appendChild(liItemDaLista);
    }else {
        divCustomizadoCheckbox.classList.remove('checked');
        NomeDoItem.style.textDecoration = "none";
        listaDeCompra.appendChild(liItemDaLista);
    }   
verificarListaComprados(listaComprados)
}) 

    const divCustomizadoCheckbox = document.createElement('div');
    divCustomizadoCheckbox.classList.add('checkbox-customizado');

labelCheckbox.appendChild(inputCheckbox);
labelCheckbox.appendChild(divCustomizadoCheckbox);
divContainerCheckbox.appendChild(labelCheckbox);
divContainerNomedoItem.appendChild(divContainerCheckbox);

    const PNomeDoItem = document.createElement('p');
    PNomeDoItem.id = "item-titulo";
    PNomeDoItem.innerText = formularioItem;

divContainerNomedoItem.appendChild(PNomeDoItem);
divContainerdaListaItem.appendChild(divContainerNomedoItem);

    const divContainerBotoes = document.createElement('div');
    const btnDeletar = document.createElement('button');
    btnDeletar.classList.add('item-lista-button');
    btnDeletar.addEventListener('click', function(){
        removerItem(liItemDaLista);
    });

divContainerBotoes.appendChild(btnDeletar);

    const imgBtnDeletar = document.createElement('img');
    imgBtnDeletar.src = "./img/delete.svg";
    imgBtnDeletar.alt = "Remover Item";

btnDeletar.appendChild(imgBtnDeletar);

    const btnEditar = document.createElement('button');
    btnEditar.classList.add('item-lista-button');
    btnEditar.addEventListener('click', function () {
        editarItem(liItemDaLista);
    });

divContainerBotoes.appendChild(btnEditar)

    const imgBtnEditar = document.createElement('img');
    imgBtnEditar.src = "./img/edit.svg";
    imgBtnEditar.alt = "Editar Item";

btnEditar.appendChild(imgBtnEditar);

    const PDataEHora = document.createElement('p'); 
    PDataEHora.innerText = gerirDiadaSemana();
    PDataEHora.classList.add("texto-data");
  

divContainerdaListaItem.appendChild(PDataEHora);
divContainerdaListaItem.appendChild(divContainerBotoes);
liItemDaLista.appendChild(divContainerdaListaItem);
liItemDaLista.appendChild(PDataEHora);

return liItemDaLista;

};