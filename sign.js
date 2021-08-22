const section = document.querySelector('section');
const sign = document.querySelectorAll('.Sign');

sign.forEach( (e)=>{
    e.addEventListener('click' , ()=>{
        section.classList.toggle('active');
        console.log(3);
    })
})