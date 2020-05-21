var number = Number(prompt("Quelle factorielle ?"))
var factorielle = 1
var count = 1


while(count <= number) {
    factorielle=factorielle*count
    count = count + 1
  } 

 console.log(`Le resultat est : ${factorielle}`);


