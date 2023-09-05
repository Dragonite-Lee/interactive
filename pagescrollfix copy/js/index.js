let section = document.getElementsByTagName("section");
var pointBtn = document.querySelectorAll('.pointWrap li');
let pageNum = 0;
const totalNum = section.length;

for( var i = 0; i < pointBtn.length; i++ ){
    (function(idx) {
        pointBtn[idx].onclick = function() {
            //alert(idx);
            pageNum = idx;
            pageChangeFunc();

            window.scrollTo({
              top: section[pageNum].offsetTop,
              behavior: 'smooth',
            })
        }
    })(i);
}

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
    for(var i=0; i<totalNum; i++){
        section[i].classList.remove("active");
        // section[i].className = "";
        pointBtn[i].classList.remove("active");
      }
      section[pageNum].classList.add("active");
      pointBtn[pageNum].classList.add("active");
      
}

pageChangeFunc();