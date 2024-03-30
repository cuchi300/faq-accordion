// Variables
const btnPlus = document.querySelectorAll('.btn-plus');
const acordion = document.querySelectorAll('.acordion');

// Event Listeners
eventListeners();
function eventListeners() {
    btnPlus.forEach( boton => {
        boton.addEventListener('click', (e) => {
            const imagen = e.target.src;

            // cambiar imagen de icono mas y menos
            if(imagen.includes('plus')) {
                e.target.src = 'assets/images/icon-minus.svg';
            } else{
                e.target.src = 'assets/images/icon-plus.svg';
            }

            // activa acordion
            activarAcordion(e);
        })
    })
}


// Funciones
//funcion para activar el acordeon cuando se hace click en boton
function activarAcordion(e) {
    const parrafo = e.target.parentElement.parentElement.nextElementSibling;

    parrafo.classList.toggle('mostrar-acordion');
    // if(parrafo.classList.contains('mostrar-acordion')) {
    //     parrafo.classList.remove('mostrar-acordion');
    // } else {
    //     parrafo.classList.add('mostrar-acordion');
    // }
}