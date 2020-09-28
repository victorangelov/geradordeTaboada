function gerar(){
    let num = window.document.querySelector("input#txtnumero")
    let res = window.document.querySelector("select#celtab")

    if(num.value.length == 0){
       window.alert(`Por favor digite um número`) 
       res.innerHTML = ``
       let iten = document.createElement('option')
       iten.text = `Digite um número acima`
       res.appendChild(iten)
    }else{
        res.innerHTML = ``
        for(var i = 1; i < 11; i++){
            let iten = document.createElement('option')
            iten.text = `${num.value} x ${i} = ${num.value * i}`
            iten.value = `res${i}`
            res.appendChild(iten)
        }
    }
}