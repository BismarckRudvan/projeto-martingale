function martingale(){
    let a = document.getElementById('inum')
    let numero = Number(a.value)
    let max = document.getElementById('imax')
    let odd = document.getElementById('odd')
    let nodd = Number(odd.value)
    let perda = -numero*nodd
    let meta = numero*nodd
    let apostado = 0
    let cont = 0
    let contgale = 0
    let contgale2 = 0
    let banca = numero
    let etapa = []
    let numgale = Number(max.value)
    let res = document.getElementById('res')

    if(a.value.length == 0 || max.value.length == 0 || odd.value.length == 0){
        window.alert (`POR FAVOR, PREENCHA TODOS OS CAMPOS!${perda}`)
    }else{
        while(contgale < numgale){
            while(perda < meta){
                cont += numero*nodd - numero
                perda = cont
                contgale2++
            }
            perda = -numero
            perda -= -cont*contgale2
            etapa.push(perda) 
            contgale++
        }
        let vitoria = banca + Number(a.value)

        if(document.getElementsByName('moeda')[0].checked){
            res.innerHTML = `Você precisa ter <strong>${banca.toLocaleString('pt-br' , {style: 'currency' , currency: 'brl'})}</strong> para fazer este Martingale! <br><br><br> Sua aposta iniciará em <strong>${Number(a.value).toLocaleString('pt-br' , {style: 'currency' , currency: 'brl'})}</strong>, e seu Martingale seguirá as seguintes etapas abaixo: <br><br>(<strong>${etapa.toLocaleString('pt-br' , {style: 'currency' , currency: 'brl'})}</strong>)<br><br><br> E em caso de vitória, você ficará com um valor total de <strong>${vitoria.toLocaleString('pt-br' , {style:'currency' , currency: 'brl'})}</strong>!`}

            else if(document.getElementsByName('moeda')[1].checked){
                res.innerHTML = `Você precisa ter <strong>${banca.toLocaleString('pt-br' , {style: 'currency' , currency: 'usd'})}</strong> para fazer este Martingale! <br><br><br> Sua aposta iniciará em <strong>${Number(a.value).toLocaleString('pt-br' , {style: 'currency' , currency: 'usd'})}</strong>, e seu Martingale seguirá as seguintes etapas abaixo: <br><br>(<strong>${etapa.toLocaleString('pt-br' , {style: 'currency' , currency: 'usd'})}</strong>)<br><br><br> E em caso de vitória, você ficará com um valor total de <strong>${vitoria.toLocaleString('pt-br' , {style:'currency' , currency: 'usd'})}</strong>!`}

                else if (document.getElementsByName('moeda')[2].checked){
                    res.innerHTML = `Você precisa ter <strong>${banca.toLocaleString('pt-br' , {style: 'currency' , currency: 'eur'})}</strong> para fazer este Martingale! <br><br><br> Sua aposta iniciará em <strong>${Number(a.value).toLocaleString('pt-br' , {style: 'currency' , currency: 'eur'})}</strong>, e seu Martingale seguirá as seguintes etapas abaixo: <br><br>(<strong>${etapa.toLocaleString('pt-br' , {style: 'currency' , currency: 'eur'})}</strong>)<br><br><br> E em caso de vitória, você ficará com um valor total de <strong>${vitoria.toLocaleString('pt-br' , {style:'currency' , currency: 'eur'})}</strong>!`}
    }
}