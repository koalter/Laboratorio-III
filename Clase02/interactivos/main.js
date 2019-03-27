window.addEventListener('load', () => {
    let btnModal = document.getElementById('btnModal');
    let btnCerrar = document.getElementById('btnCerrar');

    btnModal.addEventListener('click', () => {
        let modal = document.getElementById('modal');

        // modal.open = !modal.open;
        modal.setAttribute('open', true);
    });

    btnCerrar.addEventListener('click', () => {
        let modal = document.getElementById('modal');

        modal.removeAttribute('open');
    });
});

