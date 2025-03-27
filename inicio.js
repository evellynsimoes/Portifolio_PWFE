const foguete = document.querySelector('.foguete img');

foguete.addEventListener('click', () => {
    const fogueteContainer = document.querySelector('.foguete'); // Seleciona o elemento pai
    fogueteContainer.classList.add('voando');

    fogueteContainer.addEventListener('transitionend', () => {
        window.location.href = 'index.html';
    }, { once: true });
});