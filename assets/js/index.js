// NavBar Function
window.addEventListener('scroll', function(){
    let navBar = document.querySelector('#navBar')
    navBar.classList.toggle('scroll', window.scrollY > 100)
})

// IMG BOX HOVER
const content = document.querySelectorAll('.contentBox');
const img = document.querySelectorAll('.acomodationImg');

content.forEach((contentItem, index) => {
    contentItem.addEventListener('mouseover', () => {
        img[index].style.transform = "rotate(-5deg) scale(1.1)";
    });

    contentItem.addEventListener('mouseout', () => {
        img[index].style.transform = "rotate(0deg) scale(1)";
    });
});

// All Inclusive Section
let tipMessage = document.querySelector('.tipMessage');
let allInclusiveSection = document.querySelector('.allInclusiveSection');

function showTipMessage() {
    tipMessage.style.display = 'block';
    setTimeout(function(){
        tipMessage.style.display = 'none';
    },20000);
}
window.addEventListener('scroll', ()=>{
    const windowHeight = window.innerHeight;
    
})


let firstIcon = document.getElementById('firstIcon');
let secondIcon = document.getElementById('secondIcon');
let thirdIcon = document.getElementById('thirdIcon');


let mainText = document.getElementById('mainText');
let secondIconText = document.getElementById('secondIconText');
let thirdIconText = document.getElementById('thirdIconText');

firstIcon.addEventListener('mouseover', ()=>{
    mainText.style.display = "none";
    firstIconText.style.transition = "0.4s ease";
    firstIconText.style.display = "block";
})
firstIcon.addEventListener('mouseout', ()=>{
    mainText.style.display = "block";
    firstIconText.style.transition = "0.4s ease";
    firstIconText.style.display = "none";
})

secondIcon.addEventListener('mouseover', ()=>{
    mainText.style.display = "none";
    secondIconText.style.transition = "0.4s ease";
    secondIconText.style.display = "block";
})
secondIcon.addEventListener('mouseout', ()=>{
    mainText.style.display = "block";
    secondIconText.style.transition = "0.4s ease";
    secondIconText.style.display = "none";
})

thirdIcon.addEventListener('mouseover', ()=>{
    mainText.style.display = "none";
    thirdIconText.style.transition = "0.4s ease";
    thirdIconText.style.display = "block";
})
thirdIcon.addEventListener('mouseout', ()=>{
    mainText.style.display = "block";
    thirdIconText.style.transition = "0.4s ease";
    thirdIconText.style.display = "none";
})

