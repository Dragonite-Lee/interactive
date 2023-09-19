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
    
    if(mobileChk()) {
        wrap.addEventListener("touchstart", touchFunc, false);
        // wrap.addEventListener("touchmove", touchFunc, false);
        wrap.addEventListener("touchend", touchFunc, false);
    }

    let start_X = 0;
    let end_X = 0;
    let type = null;
    let touch = null;

    function touchFunc(evt) {
        // evt.type을 하면 touchstart touchend 두 개의 상태만 가져오게 됨
        switch (evt.type) {
            case "touchstart": //touchstart에선 터치를 시작하는 위치만 기억하면 됨
                type = "mousedown";
                touch = evt.changedTouches[0];
                start_X = touch.clientX; //화면 왼쪽부터 터치한 곳까지의 값이 나오게 됨 
                end_X = 0;
            break;
            // case "touchmove":
            //     type = "mousemove";
            //     touch = evt.changedTouches[0];
            //     console.log(touch)
            // break;
            case "touchend": //touchend에서도 터치를 어디서 땠는지를 기억해야 함
                type = "mouseup";
                touch = evt.changedTouches[0];
                end_X = touch.clientX;

                let chkNum = start_X - end_X;
                let chkNumAbs = Math.abs(chkNum); //방향말고 얼만큼 움직였는지 알아야 할 때

                if (chkNumAbs > 100) {
                    //터치를 많이해서 넘어가야 하는 상황
                    if (chkNum < 0) {
                        //왼쪽으로 터치
                        if (pageNum > 0) {
                            pageNum--;
                        } else {
                            pageNum = totalNum - 1;
                        }
                    } else {
                        //오른쪽으로 터치
                        if (pageNum < totalNum - 1) {
                            pageNum++;
                        } else {
                            pageNum = 0;
                        }
                    }
                    pageChangeFunc();
                }
            break;
        }
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

function mobileChk() {
    var mobileKeyWords = new Array('Android', 'iPhone', 'iPod', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson');
    for (var info in mobileKeyWords) {
        if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
            return true;
        }
    }
    return false;
}