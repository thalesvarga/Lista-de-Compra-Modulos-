import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaDeCompra = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");
const removerItem = (elemento) => {
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?")

    if (confirmacao) {
        elemento.remove();

        verificarListaVazia(listaDeCompra);
        verificarListaComprados(listaComprados);
    }
}

export { removerItem };