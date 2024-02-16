const boxCarreHaut = document.querySelector('.carresHaut');
const boxCarreBas = document.querySelector('.carreBas');
const bodyElement = document.body;
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');

boxCarreHaut.style.display = "flex";
boxCarreHaut.style.gap = "1em";
boxCarreHaut.style.justifyContent = "center";

// Style Body
bodyElement.style.display = "flex";
bodyElement.style.flexDirection = "column";
bodyElement.style.alignItems = "center";
bodyElement.style.gap = "1em";


boxCarreBas.classList.add('boxHaut');


//Ajout d'un methode pour changer la couleur et pour le afficher egalement

box1.addEventListener('click', () => {
    const style = window.getComputedStyle(box1);
    let styleString = style.backgroundColor;
    console.log(styleString);
    boxCarreBas.innerHTML = `<h3 style="display: flex; justify-content: center; align-items: center; height: 100%;">${styleString}</h3>`
    boxCarreBas.style.background = styleString;
})

box2.addEventListener('click', () => {
    const style = window.getComputedStyle(box2);
    let styleString = style.backgroundColor;
    console.log(styleString);
    boxCarreBas.innerHTML = `<h3 style="display: flex; justify-content: center; align-items: center; height: 100%;">${styleString}</h3>`
    boxCarreBas.style.background = styleString;
})

box3.addEventListener('click', () => {
    const style = window.getComputedStyle(box3);
    let styleString = style.backgroundColor;
    console.log(styleString);
    boxCarreBas.innerHTML = `<h3 style="display: flex; justify-content: center; align-items: center; height: 100%;">${styleString}</h3>`
    boxCarreBas.style.background = styleString;
})

box4.addEventListener('click', () => {
    const style = window.getComputedStyle(box4);
    let styleString = style.backgroundColor;
    console.log(styleString);
    boxCarreBas.innerHTML = `<h3 style="display: flex; justify-content: center; align-items: center; height: 100%;">${styleString}</h3>`
    boxCarreBas.style.background = styleString;
})




