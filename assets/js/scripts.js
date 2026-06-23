const home = document.querySelector('#itemHome');
const apuntes = document.querySelector('#itemApuntes');
const desafios = document.querySelector('#itemDesafios');
const amigos = document.querySelector('#itemAmigos');

home.addEventListener('click', () => {
    selector(home);
    home.classList.add('active');
});

apuntes.addEventListener('click', () => {
    selector(apuntes);
    apuntes.classList.add('active');
});

desafios.addEventListener('click', () => {
    selector(desafios);
    desafios.classList.add('active');
});

amigos.addEventListener('click', () => {
    selector(amigos);
    amigos.classList.add('active');
});

function selector(tiene) {
    
    let nav = [home,apuntes,desafios,amigos]

    for (let index = 0; index < nav.length; index++) {
        const element = nav[index];
        element.classList.remove('active')
    }

}