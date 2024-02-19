const containerBox = document.querySelector('.containerBoxs')



    


for (let personne in quotes) {

    const boxCitation = document.createElement('div');
    boxCitation.classList.add('boxCitation');
    const boxPersonne = document.createElement('h4')
    

    boxCitation.innerText = quotes[personne];
    boxPersonne.innerText = personne;
    containerBox.appendChild(boxCitation);
    boxCitation.appendChild(boxPersonne);


    boxCitation.addEventListener('click', function(event) {
        // Vérification que l'élément cliqué est une des citations
        if (event.target.tagName === 'DIV') {
            const personne = console.log(boxCitation);
            console.log(personne);
            const citation = quotes[personne];
            console.log(citation);
            

          
          // Stockage de la citation dans le localStorage
          let favoris = JSON.parse(localStorage.getItem('favoris')) || {};
          favoris[personne] = citation;
          localStorage.setItem('favoris', JSON.stringify(favoris));
          
          // Affichage de la confirmation
          alert('Citation ajoutée aux favoris !');
        }
      });

      localStorage.getItem('favoris');
      console.log(localStorage.getItem('favoris'));

    //   boxCitation.addEventListener('click', function(event) {
    //     console.log(event);
    //   })
  
}








