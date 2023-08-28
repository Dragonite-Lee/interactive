let x = 0;
let y = 0;
let targetX = 0;
const speed = 0.1;

const contentAll = document.querySelectorAll(".contWrap img");

const shadow = contentAll[0];
const date = contentAll[1];
const human = contentAll[2];
const textImg = contentAll[3];

window.addEventListener("mousemove", (event) => {
    
    x = event.pageX - window.innerWidth / 2;
    // y = event.pageY - window.innerHeight / 2;

    // x = event.pageX;
    // y = event.pageY;
    // console.log(x);
    //현재는 화면 젤 왼쪽이 0임. 이걸 가운데가 0으로 만드는 작업

    mouseMoveFunc();
})

const mouseMoveFunc = () => {
    // contentAll.forEach((item) => {
    //     item.style.left = x + "px";
    // });
    //rotateY를 넣어줘도 좋을것같음
    shadow.style.transform = `translate(${targetX / 35}px)`
    date.style.transform = `translate(${targetX / 20}px)`
    human.style.transform = `translate(${-targetX / 20}px)`
    textImg.style.transform = `translate(${-targetX / 5}px)`
}

const loop = () => {
    targetX += (x - targetX) * speed;
    mouseMoveFunc()
    window.requestAnimationFrame(loop)
}
loop()