import { adicionarItem } from "./Js/adicionarItem.js";
import { verificarListaComprados } from "./Js/verificarListaComprados.js";

const btnAdicionarItem = document.querySelector('.button-item');
btnAdicionarItem.addEventListener('click', adicionarItem );

const listaComprados = document.getElementById("lista-comprados");
verificarListaComprados(listaComprados);