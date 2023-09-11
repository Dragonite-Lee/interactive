const prev_button = document.querySelectorAll("button")[0];
const next_button = document.querySelectorAll("button")[1];
const album = document.querySelectorAll(".album");
const wrap = document.querySelector(".contentWrap");
const disk = document.querySelectorAll(".disk_inner")
const li = document.querySelectorAll(".buttonWrap .pointWrap li");

let bgArray = new Array(["#0272a4","#f6a564"],["#b6bfc8","#36595b"],["#e58e82","#6f569f"])
let pageNum = 0;
let totalNum = album.length;

window.onload = function() {
    prev_button.addEventListener("click", () => {
        if (pageNum > 0) {
            pageNum--;
        } else {
            pageNum = totalNum - 1;
        }
        pageChangeFunc();
    })
    
    next_button.addEventListener("click", () => {
        if (pageNum < totalNum - 1) {
            pageNum++;
        } else {
            pageNum = 0;
        }
        pageChangeFunc();
    })

    for (let i = 0; i < li.length; i++) {
        (function(idx) {
            li[idx].onclick = function() {
                pageNum = idx;
                pageChangeFunc();
            }
        })(i);
    }
    
    pageChangeFunc();
}

function pageChangeFunc() {
    wrap.style.background = `linear-gradient(120deg, ${bgArray[pageNum][0]}, ${bgArray[pageNum][1]})`;
    disk[pageNum].style.background = bgArray[pageNum][1];
    for(let i = 0; i < album.length; i++) {
        if (pageNum == i) {
            album[pageNum].classList.add('active');
            li[pageNum].classList.add('active');
        } else {
            album[i].classList.remove('active');
            li[i].classList.remove('active');
        }
    }
    console.log(pageNum)
}