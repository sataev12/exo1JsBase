
const carre = document.querySelector('.carre');
const texte = document.createElement('div')
texte.innerHTML = `<h1>Text</h1>`
carre.appendChild(texte);
carre.style.height = "200px";
carre.style.width = "200px";
carre.style.display = "flex";
carre.style.display = "Times New Roman";
carre.style.backgroundColor = "rgb(136, 174, 136)";


//------------------------------------
//Pour afficher tous les styles attribués à une classe

const styles = window.getComputedStyle(carre);
console.log(styles);

let stylesString = "Classe : carre :\n";
stylesString += "- Background color : " + styles.backgroundColor + "\n";
stylesString += "- Color: " + styles.color + "\n";
stylesString += "- Height: " + styles.height + "\n";
stylesString += "- Width: " + styles.width + "\n";
stylesString += "- Display: " + styles.display + "\n";
stylesString += "- Font: " + styles.fontFamily + " (" + styles.fontSize + ")\n";


//-----------------------------


carre.addEventListener('click', () =>{
    alert(stylesString);
})

