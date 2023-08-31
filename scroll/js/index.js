const h1 = document.querySelector('h1');
const progressBar = document.querySelector('.bar');
const submarine = document.querySelector('.submarine');
const octo = document.querySelector('.octo');
// h1.innerText = "1";
let scrollNum = 0;
window.addEventListener("scroll", () => {
    scrollNum = window.scrollY;
    h1.innerText = scrollNum.toFixed(0) + "m";
    progressBar.style.width = ((scrollNum / (document.body.scrollHeight - window.innerHeight)) * 100).toFixed(0) + "%";

    submarine.style.transform = `translateX(${((scrollNum / (window.innerWidth)) * 100).toFixed(0)}%)`;
    octo.style.transform = `translateY(-${((scrollNum / (document.body.scrollHeight - window.innerHeight)) * 100).toFixed(0)}%)`;
})