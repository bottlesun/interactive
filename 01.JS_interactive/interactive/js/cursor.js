let btn_event;
let cursorItem;
let circle;
let x=0, y = 0;
let mx=0, my = 0;

window.onload = function(){
    btn_event = document.querySelectorAll('.inner > a');


    cursorItem = document.querySelector('.cursorItem');
    circle = document.querySelector('.circle');
    
    // 버튼 이벤트
    for(let i = 0 ; i < btn_event.length ; i++){
        btn_event[i].addEventListener('mouseover', ()=> {
            circle.style.transform = 'scale(.3)'
        });
        btn_event[i].addEventListener('mouseout',()=> {
            circle.style.transform = 'scale(1)'
        });
    }

    window.addEventListener('mousemove', (e)=> {
        x = e.clientX;
        y = e.clientY;
       // cursorItem.style.transform = `translate(${x}px,${y}px)`;
    });

    loop();
}

function loop(){
    mx += (x - mx ) * .05;
    my += (y - my ) * .05;
    cursorItem.style.transform = `translate(${mx}px,${my}px)`;

    requestAnimationFrame(loop);
}