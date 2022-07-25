class Forca {
  constructor(palavra) {
    this.palavra = palavra,
    this.letrasChutadas = [],
    this.vidas = 6,
    this.palavraSecreta = []
    for (let i = 0; i < palavra.length; i++) {
        this.palavraSecreta.push("_")
    }
  }

  inserir(letra) {
    for (let i = 0; i < this.palavraSecreta.length; i++) {
      if (this.palavra[i] === letra) {
        this.palavraSecreta[i] = letra
      }
    }
  }

  chutar(letra) { 
    if (letra.length == 1) {
      if (this.palavra.indexOf(letra) != -1 && this.letrasChutadas.indexOf(letra) == -1) {
        this.letrasChutadas.push(letra)
        this.inserir(letra)
        return true
      } else if (this.palavra.indexOf(letra) == -1 && this.letrasChutadas.indexOf(letra) == -1) {
        this.letrasChutadas.push(letra)
        this.vidas -= 1
        return false
      }
    }
  }

  buscarEstado(palavra) {
    var estado = "aguardando chute"
    
    if (this.vidas > 0 && this.palavraSecreta.toString().replace(/,/g,"") === this.palavra) {
      estado = "ganhou"
    } else if (this.vidas == 0) {
      estado = "perdeu"
    }
    return estado; 
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavraSecreta.toString().replace(/,/g,"")// Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
          }
      }
  }

module.exports = Forca;
