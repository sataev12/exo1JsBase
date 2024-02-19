const containerBox = document.querySelector('.container-box');
const boxIcon = document.querySelector('.box-icon');
const icon = document.querySelector('.icon');
const nomFacebook = document.querySelector('.nomFacebook');
const nomTwitter = document.querySelector('.nomTwitter');
const nomInsta = document.querySelector('.nomInsta');
const boxFacebook = document.querySelector('.facebook');
const boxInsta = document.querySelector('.instagram');
const boxTwitter = document.querySelector('.twitter');


const couleurOriginale = "gray";
const couleurFacebook = "rgb(62, 62, 158)";
const couleurTwitter = "rgb(74, 164, 212)";
const couleurInsta = "rgb(189, 62, 69)";
const boxShadow =  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";



let clique = false;

    function changeParametresFacbk() {
        if(!clique){
            containerBox.style.backgroundColor = couleurFacebook;
            boxFacebook.style.borderRadius = "8px";
            boxFacebook.style.boxShadow = boxShadow;
            nomFacebook.style.visibility = "visible";
            // Transformation de l'élément
            
            // Marquer qu'on a déjà cliqué
            clique = true;
        } else { // Si on a déjà cliqué une fois
            // Revenir à la couleur originale (bleue)
            containerBox.style.backgroundColor = couleurOriginale;
            boxFacebook.style.borderRadius = "0px";
            boxFacebook.style.boxShadow = "none";
            nomFacebook.style.visibility = "hidden";
            // Réinitialiser l'état du clic
            clique = false;
        }
    }

    function changeParametresTwitr() {
        if(!clique){
            containerBox.style.backgroundColor = couleurTwitter;
            boxTwitter.style.borderRadius = "8px";
            boxTwitter.style.boxShadow = boxShadow;
            nomTwitter.style.visibility = "visible";

            clique = true;
        } else { 
            containerBox.style.backgroundColor = couleurOriginale;
            boxTwitter.style.borderRadius = "0px";
            boxTwitter.style.boxShadow = "none";
            nomTwitter.style.visibility = "hidden";
         
            clique = false;
        }
    }

    function changeParametresInsta() {
        if(!clique){
            containerBox.style.backgroundColor = couleurInsta;
            boxInsta.style.borderRadius = "8px";
            boxInsta.style.boxShadow = boxShadow;
            nomInsta.style.visibility = "visible";

            clique = true;
        } else { 
            containerBox.style.backgroundColor = couleurOriginale;
            boxInsta.style.borderRadius = "0px";
            boxInsta.style.boxShadow = "none";
            nomInsta.style.visibility = "hidden";
         
            clique = false;
        }
    }





    boxFacebook.addEventListener('click', changeParametresFacbk);
    boxTwitter.addEventListener('click', changeParametresTwitr);
    boxInsta.addEventListener('click', changeParametresInsta);