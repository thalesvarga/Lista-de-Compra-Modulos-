import { gerirDiadaSemana } from "./gerirDiadaSemana.js";


export const editarItem = (elemento) => {
    let novoItem = prompt ('Qual será o novo item?');
    if(novoItem !== null && novoItem.trim() !== ""){
        const itemAtualizado = elemento.querySelector('#item-titulo');
        itemAtualizado.textContent = novoItem;

        const estavaComprado = elemento.querySelector('.input-checkbox').checked;

        if(estavaComprado){
            elemento.querySelector('.input-checkbox').checked = true ;
            elemento.querySelector(".checkbox-customizado").classList.add('checked'); 
            itemAtualizado.style.textDecoration ='line-through';

        }
    }    
    const dataDeCriacao = elemento.querySelector(".texto-data");
    dataDeCriacao.textContent = gerirDiadaSemana();
}   