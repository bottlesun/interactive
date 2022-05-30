let cursor = document.querySelector('.cursorItem'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0;

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }

});


window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

cursorScale.forEach(link => {
    link.addEventListener('mouseleave',()=> {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
    link.addEventListener('mousemove',()=> {
        cursor.classList.add('grow');

        if(link.classList.contains('small')){ //contains() 문자열에 지정 문자열이 포함 되었는지 확인 하는 함수.
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }
    });
});