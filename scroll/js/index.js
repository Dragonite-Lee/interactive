const h1 = document.querySelector('h1');
// h1.innerText = "1";
let scrollNum = 0;
window.addEventListener("scroll", () => {
    scrollNum = window.scrollY;
    h1.innerText = ((scrollNum / (document.body.scrollHeight - window.innerHeight)) * 100).toFixed(0) + "%";
})