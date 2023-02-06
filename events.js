const btn = document.querySelectorAll('button'),
     overlay = document.querySelector('.overlay');

btn.onclick = () => {
    alert('Click2');
};



btn.addEventListener('click', () => {
    alert('ClickKlack');
}); 



btn.addEventListener('click', () => {
    alert('SeecondClickKlack');
});



btn.addEventListener('mouseenter',(e) => {
    console.log('Mouse enter');
    console.log(e);
});



btn.addEventListener('mouseenter', (e) => {
    console.log(e.target);
    e.target.remove();
});



btn.addEventListener('click', (e) => {
    e.target.remove();
});


let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    i ++;
    if(i == 1){
        btn.removeEventListener('click',deleteElement);
    }
};

btn.addEventListener('click', deleteElement);




const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
   
};

btn.addEventListener('click', deleteElement);
overlay .addEventListener('click', deleteElement);


btn.forEach(btn => {
    btn.addEventListener( 'click', deleteElement, {once: true}); 
}); 

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});