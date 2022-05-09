
let button1 = document.getElementById('coolButton');
button1.addEventListener('click', () => {
    document.getElementById('intro').style.backgroundColor = 'green';
})

let button2 = document.getElementById('geekyButton');
button2.addEventListener('click', () => {
    document.getElementById('intro').style.backgroundColor = 'pink';
})

let button3 = document.getElementById('bordersButton');
button3.addEventListener('click', () => {
    const level3 = document.querySelectorAll('h3');
    level3.forEach(item => {
        if (item.style.border === '1px solid green')
            item.style.border = 'none';
        else
            item.style.border = '1px solid green';
    });
})

