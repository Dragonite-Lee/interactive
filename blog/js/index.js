const header = document.querySelector('header');
const progressBar = document.querySelector(".bar");
const coverTitle = document.querySelector(".coverTitle");
const coverWrap = document.querySelector(".coverWrap");
const dimd = coverWrap.querySelector(".dimd")

let scrollNum = 0;
let documentHeight = 0;
let per = 0;
let coverHeight = coverWrap.clientHeight;//800을 하드코딩 하긴 그러니 이미지 커버 부분 높이임

window.addEventListener('scroll', () => {
    scrollNum = window.scrollY;
    documentHeight = document.body.scrollHeight - window.innerHeight + coverHeight;
    console.log(per)
    per = percent(scrollNum, documentHeight);
    progressBar.style.width = per + "%";

    if (scrollNum >= coverHeight) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
        coverTitle.style.top = -scrollNum / 10 + 'px';
        //이래야 coverTitle이 계속움직이지 않음
        coverWrap.style.backgroundPosition = `center ${(-scrollNum/5)}px`
        dimd.style.backgroundColor = `rgba(0, 0, 0, ${0.4 + scrollNum / 700})`
    }

    
});

const percent = (num, totalNum) => {
    return ((num / totalNum) * 100).toFixed(0);
};