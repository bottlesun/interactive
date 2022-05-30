let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.03;

let scrollTop = 0;
let parallax_0 , parallax_1, parallax_2 ,parallax_3,parallax_4,parallax_5,parallax_6;
let progressBar , _documentHum , _windowHNum;
window.onload = function() {
    progressBar = document.getElementsByClassName('progressBar')[0];

        parallax_0 = document.getElementById(`parallax_0`);
        parallax_1 = document.getElementById(`parallax_1`);
        parallax_2 = document.getElementById(`parallax_2`);
        parallax_3 = document.getElementById(`parallax_3`);
        parallax_4 = document.getElementById(`parallax_4`);
        parallax_5 = document.getElementById(`parallax_5`);
        parallax_6 = document.getElementById(`parallax_6`);


    window.addEventListener('resize', stageResize, false);
    window.addEventListener('mousemove', mouseMove, false);
    window.addEventListener('scroll', scrollFunc, false);

    stageResize();
    loop();
}

function scrollFunc(e) {
    let scrollTop = document.documentElement.scrollTop;
    //window.outerHeight <- 브라우저 전체 높이(검색창 포함)
    //window.innerHeight <- 브라우저 안쪽 높이(실제 컨텐츠 영역)
    //세로 퍼센트값 = 스크롤탑 / (문서 높이 - 화면 높이) * 100;
    let per = Math.ceil(scrollTop / (document.body.offsetHeight - window.outerHeight) * 100);
    progressBar.style.width = per + "%";
    
    // 배경 스크롤 시 모션 설정 scrollTop 위치에 따라 -면 반대로 +면 같은방향으로 이동 
    // 스크롤 시 100px 정도 값이 기본이다. 100  * N 수로 범위 조절
    parallax_0.style.transform = `translate3d(0px,${scrollTop * .03}px , 0px)` // 마지막 배경
    parallax_1.style.transform = `translate3d(0px,${-scrollTop * .03}px , 0px)`
    parallax_2.style.transform = `translate3d(0px,${-scrollTop * .12}px , 0px)`
    parallax_3.style.transform = `translate3d(0px,${-scrollTop * .16}px , 0px)`
    // parallax_4.style.transform = `translate3d(0px,${-scrollTop * .22}px , 0px)`
    // parallax_5.style.transform = `translate3d(0px,${-scrollTop * .25}px , 0px)`

   
}

function stageResize() {

    _documentHum = document.body.offsetHeight;
    _windowHNum = window.outerHeight;
    console.log("document : " + _documentHum + " window : " + _windowHNum)

}

function loop() { // 자연스러운 움직임 무한 루프를 줘서 모션의 움직임을 자연스럽게 할때 사용

    // 마우스의 가속도 조절
    mx += (x - mx) * speed;
    my += (y - my) * speed;
    //translate3d(${mx/140}px , ${-mx * .22} px , 0px)
    parallax_4.style.transform = `translate3d(${mx/140}px,${-mx * .05}px,0px)`;
    parallax_5.style.transform = `scale(1.1) translate(${-mx/50}px,${scrollTop * .25}px)`;

    parallax_6.style.transform = `scale(1.2) translate(${mx/20}px, ${scrollTop * .25}px)`;

    window.requestAnimationFrame(loop);
}


function mouseMove (e) {
    // e.clientX,Y (마우스 무브 기준 위치 = 브라우저 안쪽 넓이 , 높이 / 2) = 가운데 값
    x = (e.clientX - window.innerWidth / 2);
    y = (e.clientY - window.innerHeight / 2);

}
