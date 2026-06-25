const home = document.querySelector('#itemHome');
const apuntes = document.querySelector('#itemApuntes');
const desafios = document.querySelector('#itemDesafios');
const amigos = document.querySelector('#itemAmigos');
const contenedorMain = document.querySelector("#contenedorPrincipal");

/* if (home.classList.contains('active')) {
        console.log('esta en el home')
        contenedorMain.innerHTML = '<div class=" bg-light w-100 h-100"><h1>Home</h1></div>';
    } */


home.addEventListener('click', () => {
    selector();
    home.classList.add('active');

    if (home.classList.contains('active')) {
        console.log('esta en el home')
        contenedorMain.innerHTML = '<div class=" bg-light w-100 h-100"><h1>Home</h1></div>';
    }
});

apuntes.addEventListener('click', () => {
    selector();
    apuntes.classList.add('active');
    if (apuntes.classList.contains('active')) {
        console.log('esta en el home')
        contenedorMain.innerHTML = `<div class=" bg-light w-100">
                <div class="p-2">
                    <h1><i class="bi bi-journals"></i>Apuntes</h1>
                    <hr>
                    <div class="d-flex contenedorApuntes p-5 row gap-3">
                        <div class="card nav-link col-4" style="width: 10rem;">
                            <img src="https://png.pngtree.com/png-clipart/20230428/original/pngtree-document-line-icon-png-image_9118673.png"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Como resolver funciones</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-2">
                    <h1><i class="bi bi-journals"></i>Apuntes Conpartidos Conmigo</h1>
                    <hr>
                    <div class="d-flex contenedorApuntes p-5 row gap-3">
                        <div class="card nav-link col-4" style="width: 10rem;">
                            <img src="https://png.pngtree.com/png-clipart/20230428/original/pngtree-document-line-icon-png-image_9118673.png"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Como resolver funciones</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    }
});

desafios.addEventListener('click', () => {
    selector();
    desafios.classList.add('active');
    if (desafios.classList.contains('active')) {
        console.log('esta en el home')
        contenedorMain.innerHTML = `<div class=" bg-light w-100">
                <div class="p-2">
                    <h1><i class="bi bi-journals"></i>Desafios</h1>
                    <hr>
                    <div class="d-flex contenedorApuntes p-5 row gap-3">
                        <div class="card nav-link col-4" style="width: 10rem;">
                            <img src="https://png.pngtree.com/png-clipart/20230428/original/pngtree-document-line-icon-png-image_9118673.png"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Como resolver funciones</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    }
});

amigos.addEventListener('click', () => {
    selector();
    amigos.classList.add('active');
    if (amigos.classList.contains('active')) {
        console.log('esta en el home')
        contenedorMain.innerHTML = '<div class=" bg-light w-100 h-100"><h1>amigos</h1></div>';
    }
});

function selector() {
    
    let nav = [home,apuntes,desafios,amigos]

    nav.forEach(item => {
        item.classList.remove('active')
    })

}

