const containerCube = document.querySelector('.container-cube');
const couleurOriginale = "green";
const couleurModifiee = "red";

for(let i = 1; i <= 4; i++) {
    const cube = document.createElement('div');
    cube.classList.add('cube');
    cube.innerText = i;
    containerCube.appendChild(cube);

    let clique = false;

    function changeParametres() {
        if(!clique){
            cube.style.backgroundColor = couleurModifiee;
            // Transformation de l'élément
            cube.style.transform = "scale(0.9) rotate(360deg)";
            // Marquer qu'on a déjà cliqué
            clique = true;
        } else { // Si on a déjà cliqué une fois
            // Revenir à la couleur originale (bleue)
            cube.style.backgroundColor = couleurOriginale;
            // Rétablir la taille et la rotation initiales de l'élément
            cube.style.transform = "scale(1) rotate(0deg)";
            // Réinitialiser l'état du clic
            clique = false;
        }
    }
    cube.addEventListener('click', changeParametres);
}






