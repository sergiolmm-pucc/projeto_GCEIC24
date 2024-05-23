function InvestimentoSeguro(Juros, Aporte, tempo){
    const juros = Juros/100

    const resultado = Aporte * (((1+juros)** tempo - 1)/juros)

    return arredondaDuasCasas(resultado)

}

function arredondaDuasCasas(numero) {
    return Number(numero.toFixed(2))
  }

function simularinvestimento(){

    const nome = document.getElementById("nome").value
    const juros = document.getElementById("Juros").value
    const aporte = document.getElementById("Aporte").value
    const tempo = document.getElementById("tempo").value

    if(juros == "" || aporte == "" || tempo == ""){
        alert("Informe os valores")
        return
    }

    const InvestSeguro = InvestimentoSeguro(juros, aporte, tempo)


    document.getElementById("resultado").innerText = nome + ", Após " + tempo + " meses o valor do retorno do investimento será de: "+ InvestSeguro.toLocaleString("pt-br", {style:"currency",currency:"BRL"})

}

module.exports = { simularinvestimento, InvestimentoSeguro};