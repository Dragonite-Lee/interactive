let section = document.getElementsByTagName("section");
let pageNum = 0;
const totalNum = section.length;

window.addEventListener('scroll', () => {
    let scroll = this.scrollY;

    for (let i = 0; i < totalNum; i++) {
        if (scroll > section[i].offsetTop - window.innerHeight/1.5 && scroll < section[i].offsetTop - window.innerHeight/1.5 + section[i].offsetHeight) {
            pageNum = i;
            break;
        }
    }
    pageChangeFunc();
})

const pageChangeFunc = () => {
    for (let i = 0; i < totalNum; i++) {
        section[i].classList.remove("active");
    }
    section[pageNum].classList.add("active");
}

pageChangeFunc();