function martingale(){
    let a = document.getElementById('inum')
    let max = document.getElementById('imax')
    let res = document.getElementById('res')
    let moeda = document.getElementsByName ('moeda')
    let numero = Number(a.value)
    let contgale = 0
    let banca = numero
    let vitoria = 0
    let etapa = []
    let numgale = Number(max.value)
    if(a.value.length == 0 || max.value.length == 0){
        window.alert (`POR FAVOR, PREENCHA TODOS OS CAMPOS!`)
    }else{
        while(contgale < numgale){
            numero += numero
            etapa.push(numero)
            banca += numero
            contgale++
        }

        vitoria = banca + Number(a.value)

        if(moeda[0].checked){
            banca = banca.toLocaleString('pt-br' , {style: 'currency' , currency: 'brl'})
            a = Number(a.value).toLocaleString('pt-br' , {style: 'currency' , currency: 'brl'})
            vitoria = vitoria.toLocaleString('pt-br' , {style:'currency' , currency: 'brl'})

        } else if (moeda[1].checked){
            banca = banca.toLocaleString('pt-br' , {style: 'currency' , currency: 'usd'})
            a = Number(a.value).toLocaleString('pt-br' , {style: 'currency' , currency: 'usd'})
            vitoria = vitoria.toLocaleString('pt-br' , {style:'currency' , currency: 'usd'})

        } else if (moeda[2].checked){
            banca = banca.toLocaleString('pt-br' , {style: 'currency' , currency: 'eur'})
            a = Number(a.value).toLocaleString('pt-br' , {style: 'currency' , currency: 'eur'})
            vitoria = vitoria.toLocaleString('pt-br' , {style:'currency' , currency: 'eur'})
        }
        for (let pos = 0; pos < etapa.length; pos++){
            if(moeda[0].checked){
                res.innerHTML = `Para fazer este Martingale, você precisa ter <strong>${banca}</strong>! <br><br> Sua aposta iniciará em <strong>${a}</strong>! <br><br> Em caso de vitória, você ficará com um valor total de <strong>${vitoria}</strong>!<br><br>Seu Martingale seguirá as seguintes etapas abaixo: <br><br>`
                res2.innerHTML += `<strong>${etapa[pos].toLocaleString ('pt-br' , {style: 'currency' , currency: 'brl'})}</strong><br>`}
        }

        for (let pos = 0; pos < etapa.length; pos++){
            if(moeda[1].checked){
                res.innerHTML = `Para fazer este Martingale, você precisa ter <strong>${banca}</strong>! <br><br> Sua aposta iniciará em <strong>${a}</strong>! <br><br> Em caso de vitória, você ficará com um valor total de <strong>${vitoria}</strong>!<br><br>Seu Martingale seguirá as seguintes etapas abaixo: <br><br>`
                res2.innerHTML += `<strong>${etapa[pos].toLocaleString ('pt-br' , {style: 'currency' , currency: 'usd'})}</strong><br>`}
        }

        for (let pos = 0; pos < etapa.length; pos++){
            if(moeda[2].checked){
                res.innerHTML = `Para fazer este Martingale, você precisa ter <strong>${banca}</strong>! <br><br> Sua aposta iniciará em <strong>${a}</strong>! <br><br> Em caso de vitória, você ficará com um valor total de <strong>${vitoria}</strong>!<br><br>Seu Martingale seguirá as seguintes etapas abaixo: <br><br>`
                res2.innerHTML += `<strong>${etapa[pos].toLocaleString ('pt-br' , {style: 'currency' , currency: 'eur'})}</strong><br>`}
        }

    }
}

function limpar(){
    let a = document.getElementById('inum')
    let max = document.getElementById('imax')
    res.innerHTML= "<strong>Resultado</strong>"
    res2.innerHTML= ""
    a.value = ''
    max.value = ''
    a.focus()
}