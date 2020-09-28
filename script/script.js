function gerar(){
    let num = window.document.querySelector("input#txtnumero")
    let res = window.document.querySelector("div#res")

    if(num.value.length == 0){
       window.alert(`Por favor digite um número`)
    }else{
        res.innerHTML = `` 
        for(var i = 1; i < 11; i++){
            res.innerHTML += ` ${num.value} x  ${i} = ${num.value*i} <br>`
        }
    }
}