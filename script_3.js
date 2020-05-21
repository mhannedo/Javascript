var number = Number(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"))
var count = 0
var space = " "
var nospace ="#"

while(count <= number) {
    let etage = space.repeat(number-count) + nospace.repeat(count)
    console.log(etage)
    count = count + 1
  } 
