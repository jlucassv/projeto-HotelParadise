// NavBar Function
window.addEventListener("scroll", function(){
    let navBar = document.querySelector('#navBar')
    navBar.classList.toggle('scroll', window.scrollY > 100)
})