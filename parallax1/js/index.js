let scrollNum = 0;

const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
const totalNum = imageAll.length;
const imageMove = document.querySelector(".subPage .parallaxImage");
let x = 0;
let targetX = 0;
const speed = .3;

window.addEventListener('scroll', () => {
    scrollNum = window.scrollY;

    imageAll.forEach((item, index) => {
        if (index < 4) {
            item.style.transform = `translateY(${-scrollNum / (2 * (totalNum - index))}px)`;
        }
    })
})

window.addEventListener('mousemove', (e) => {
    x = e.pageX - window.innerWidth / 2;
    
});

const loop = () => {
    targetX += (x - targetX) * speed;
    imageMove.style.transform = `scale(1.1) translateX(${-targetX / 20}px)`;
    imageAll[5].style.transform = `scale(1.05) translate(${-targetX / 100}px, ${-scrollNum / (2 * (totalNum - 5))}px)`;
    imageAll[4].style.transform = `scale(1.05) translate(${targetX / 100}px, ${-scrollNum / (2 * (totalNum - 4))}px)`;
    window.requestAnimationFrame(loop);
}
loop();