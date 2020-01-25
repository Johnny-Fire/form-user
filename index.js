document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', ev => {
        alert('НАЖАЛИ НА КНОПКУ');
    });
});