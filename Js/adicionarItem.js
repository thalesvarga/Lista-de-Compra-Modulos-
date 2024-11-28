import { criarItem } from "./criarItem.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const formularioItem = document.querySelector('.input-item')
const listaDeCompra = document.querySelector('#lista-de-compras')

export function adicionarItem (evento){
    evento.preventDefault()
  
    
    const liItemDaLista = criarItem(formularioItem.value);
listaDeCompra.appendChild(liItemDaLista);
verificarListaVazia(listaDeCompra);
}