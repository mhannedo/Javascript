const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  var count = 0 
  books.forEach(function(element) {

    if (element.rented ===0) {
        count +=1
    } 
  });


  switch (count) {
    case 0:
        console.log("IL n'y a aucun livre non loué"); 
    break;

    default:
        console.log(`Il y a ${count} livre(s) non loué(s)`);
    break;
    }

    var array1 = books[0]    
    books.forEach(function(element) {

        if (element.rented > array1.rented) {
            array1 = element

        } 
      });

      console.log("Le plus emprunté"); 
      console.log(array1)

      var array2 = books[0]    
    books.forEach(function(element) {

        if (element.rented < array2.rented) {
            array2 = element

        } 
      });

      console.log("Le moins emprunté"); 
      console.log(array2)

    const resultat1 = books.find( book => book.id === 873495);
    console.log(`Le livre avec l'ID 873494 est`); 
    console.log(resultat1)

    let DeletedBook = books.find( book => book.id === 133712);
    console.log (DeletedBook)
    books2 = books.filter(item => item !== DeletedBook)
    console.log (books2)



    console.log ("Trie les livres par ordre alphabétique ")
    console.log(books2.sort(function(a, b){
    if(a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;
}))

