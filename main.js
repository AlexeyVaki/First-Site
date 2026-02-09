const input = document.querySelector('#emailField');
const button = document.querySelector('#emailButton');

const konamiCode = ['U','U','D','D','L','R','L','R'];
let buffer = [];

// отслеживаем изменения input для смены текста кнопки
input.addEventListener('input', () => {
    if (input.value.toUpperCase() === 'BA') {
        button.textContent = 'Start';
    } else {
        button.textContent = 'Continue';
    }
});

// функция открытия меню
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('open');
}

// функция нажатия кнопки джойстика
function pressButton(dir) {
    buffer.push(dir);
    if (buffer.length > konamiCode.length) buffer.shift();
    console.log("Текущий буфер: ", buffer); // <- вот это
}

// проверка кода при нажатии Start / Continue
function checkEmail() {
    const emailValue = input.value.toUpperCase();
    
    if (emailValue === 'BA' && buffer.join('') === konamiCode.join('')) {
        alert("Secret code completed! 🚀");
    } else if (!emailValue.includes('@')) {
        alert('No @ symbol');
    } else if (!emailValue.includes('.')) {
        alert('No . symbol');
    } else {
        alert('Everything is good!');
    }
}

const buttons = document.querySelectorAll('.joystick .joy-btn');

buttons.forEach(btn => {
    btn.addEventListener('mousedown', () => btn.classList.add('pressed'));
    btn.addEventListener('mouseup', () => btn.classList.remove('pressed'));
});


function toggleTheme() {
    document.body.classList.toggle('light');

    const img_j = document.querySelector('#hero-img');
    const img_thm = document.querySelector('#theme-img');
    const trendImgs = document.querySelectorAll('.trend-img');

    const isLight = document.body.classList.contains('light');

    // img_j.src = isLight ? 'img/Group_1321_negate.png' : 'img/Group_1321.png';
    img_thm.src = isLight ? 'img/moon.png' : 'img/sun.png';

    trendImgs.forEach(img => {
        img.src = isLight ? 'img/fire_1_negate.png' : 'img/fire_1.png';
    });

}   