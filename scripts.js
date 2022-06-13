let comida_escolhida;
let bebida_escolhida;
let sobremesa_escolhida;
let valor_comida=0;
let valor_sobremesa=0;
let valor_bebida=0;
let total=0;

function selecionarcomida(comida){

    const seleção_item=document.querySelector(".comidas").querySelector(".selecionado");

    if(seleção_item !== null){
        seleção_item.classList.remove("selecionado");
        seleção_item.querySelector(".check").classList.add("check_off");
        valor_comida=0;
    } 
    
    comida.classList.add("selecionado");
    comida.querySelector(".check").classList.remove("check_off");

    comida_escolhida = document.querySelector(".comidas").querySelector(".selecionado").querySelector(".nomePrato").innerHTML;
    valor_comida=document.querySelector(".comidas").querySelector(".selecionado").querySelector(".preçoPrato").innerHTML;
    valor_comida=valor_comida.slice(3);
    valor_comida=valor_comida.replace(",",".");
    valor_comida=parseFloat(valor_comida).toFixed(2);
    habilitado();
}

function selecionarbebida(bebida){

    const seleção_item=document.querySelector(".bebidas").querySelector(".selecionado");

    if(seleção_item !== null){
        seleção_item.classList.remove("selecionado");
        seleção_item.querySelector(".check").classList.add("check_off");
        valor_bebida=0;
    } 
    
    bebida.classList.add("selecionado");
    bebida.querySelector(".check").classList.remove("check_off");
    bebida_escolhida = document.querySelector(".bebidas").querySelector(".selecionado").querySelector(".nomeBebida").innerHTML;
    valor_bebida = document.querySelector(".bebidas").querySelector(".selecionado").querySelector(".preçoBebida").innerHTML;
    valor_bebida=valor_bebida.slice(3);
    valor_bebida=valor_bebida.replace(",",".");
    valor_bebida=parseFloat(valor_bebida).toFixed(2);
    habilitado();
}

function selecionarsobremesa(sobremesa){

    const seleção_item=document.querySelector(".sobremesas").querySelector(".selecionado");

    if(seleção_item !== null){
        seleção_item.classList.remove("selecionado");
        seleção_item.querySelector(".check").classList.add("check_off");
        valor_sobremesa=0;
    } 
    
    sobremesa.classList.add("selecionado");
    sobremesa.querySelector(".check").classList.remove("check_off");

    sobremesa_escolhida = document.querySelector(".sobremesas").querySelector(".selecionado").querySelector(".nomeSobremesa").innerHTML;
    valor_sobremesa = document.querySelector(".sobremesas").querySelector(".selecionado").querySelector(".preçoSobremesa").innerHTML;
    valor_sobremesa=valor_sobremesa.slice(3);
    valor_sobremesa=valor_sobremesa.replace(",",".");
    valor_sobremesa=parseFloat(valor_sobremesa).toFixed(2);
    habilitado();
}

function habilitado(){
    if(valor_comida !== 0 && valor_bebida !== 0 && valor_sobremesa !== 0 ){
        const elemento = document.querySelector(".botao");
	     elemento.classList.add("verde");
         elemento.innerHTML="Fechar pedido";
    }
}

function mensagem(){
    if(valor_comida !== 0 && valor_bebida !== 0 && valor_sobremesa !== 0){
        
        total = parseFloat(valor_comida)+parseFloat(valor_bebida)+parseFloat(valor_sobremesa);
        total= total.toFixed(2);
    
        let mensagem = encodeURIComponent( 
        `Olá, gostaria de fazer o pedido:
        Prato: ${comida_escolhida}
        Bebida: ${bebida_escolhida}
        Sobremesa: ${sobremesa_escolhida}
        
        Total: R$ ${total}`);
            window.open(`https://wa.me/5541988897016?text=${mensagem}`);
}}