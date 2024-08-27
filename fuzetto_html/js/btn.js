var botao = document.getElementById("btncmp")
botao.addEventListener("click",comprar)

function comprar(){
    var conf = confirm("Deseja confirmar a compra?")
    if(conf == true){
        alert("COMPRA CONFIRMADA!")
    }
    else{
        alert("COMPRA CANCELADA")
    }
}