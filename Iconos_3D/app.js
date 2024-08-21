const btn_icon = document.querySelectorAll('li');

btn_icon.forEach(icon => {
    icon.addEventListener('click', ()=>{
        icon.classList.toggle('shadow-inset');
    });
})