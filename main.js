const biscuit1 = document.querySelector(".biscuit1")
const biscuit2 = document.querySelector(".biscuit2")
const btnTry = document.querySelector("#btnTry")
const luckyPhrase = document.querySelector("#luckyPhrase")
const btnOpen = document.querySelector("#btnOpen")
let phrase = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Motivação não é sinónimo de transformação, mas um passo em sua direção.",
  "Sua visão se tornará clara apenas quando você puder olhar dentro de seu coração.",
  "Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.",
  "Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.",
  "A vida é para quem topa qualquer parada. Não para quem pára em qualquer topada.",
  "Você precisa fazer aquilo que pensa que não é capaz de fazer.",
  "O insucesso é apenas uma oportunidade para recomeçar de novo com mais inteligência."
]

let phrases = phrase.length

btnOpen.addEventListener('click', clickPhrase)
btnTry.addEventListener('click', handleResetClick)

function clickPhrase() {
  let randomPhrase = Math.floor(Math.random() * phrases)
  
  luckyPhrase.innerText = phrase[randomPhrase];
  toggleScreen()
}

function handleResetClick() {
  toggleScreen()
  randomPhrase = Math.floor(Math.random() * phrases)
}

function toggleScreen() {
  biscuit1.classList.toggle('hide')
  biscuit2.classList.toggle('hide')
}