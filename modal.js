const open= document.getElementById('open');
const modal_Container= document.getElementById('modal_Container');
const close= document.getElementById('close');


open.addEventListener('click',()=>{
    modal_Container.classList.add=('show');
});

close.addEventListener('click',()=>{
    modal_Container.classList.remove('show');
});

let hola=<p>Hola</p>;