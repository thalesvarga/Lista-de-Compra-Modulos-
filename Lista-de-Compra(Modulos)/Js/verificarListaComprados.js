
const containerListaComprados = document.querySelector(".container-lista-comprado");


export function verificarListaComprados (lista) {
   
    if(lista.childElementCount === 0){
        containerListaComprados.style.display = "none"    

    }else{
      containerListaComprados.style.display = "block"
   
    }
}