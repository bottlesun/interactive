
    let easeInOut = Expo.easeInOut;
    // 인트로
    TweenMax.to('.overlay h1', 2, {
        opacity: 0,
        y: -60,
        ease: easeInOut
    });

    TweenMax.to('.overlay span', 2, {
        delay: .3,
        opacity: 0,
        y: -60,
        ease: easeInOut
    });

    TweenMax.to('.overlay', 2, {
        delay: 0.5,
        opacity: 0,
        ease: easeInOut
    });

    TweenMax.to('.overlay', 2, {
        delay: 1.5,
        y: "-100%",
        ease: easeInOut
    });

    // 원 애니메이션
    TweenMax.from('.ellipse-container', 1 , {
        delay : 2,
        opacity : 0,
        ease : easeInOut
    });
    TweenMax.from('.yellow', 1 , {
        delay : 3,
        opacity : 0,
        ease : easeInOut
    });
    TweenMax.from('.circle1', 1 , {
        delay : 2.4,
        opacity : 0,
        ease : easeInOut
    });
    TweenMax.from('.circle2', 1 , {
        delay : 2.6,
        opacity : 0,
        ease : easeInOut
    });

    // logo menu
    TweenMax.from('.logo', 1 , {
        delay : 3,
        opacity : 0,
        y: -100,
        ease : easeInOut
    });

    TweenMax.staggerFrom('.menu-links ul li', 1 , {
        delay : 3.2,
        opacity : 0,
        x: -100,
        ease : easeInOut
    }, 0.08);

    TweenMax.from('.scrollDown', 1 , {
        delay : 3.4,
        opacity : 0,
        y: 100,
        ease : easeInOut
    });

    TweenMax.from('.text .title', 1 , {
        delay : 3,
        opacity : 0,
        x: 100,
        ease : easeInOut
    });

    TweenMax.from('.text p', 1 , {
        delay : 3.2,
        opacity : 0,
        x: 200,
        ease : easeInOut
    });

    TweenMax.from('.watchNow', 1 , {
        delay : 3.4,
        opacity : 0,
        x: 200,
        ease : easeInOut
    });

    TweenMax.staggerFrom('.media ul li', 1 , {
        delay : 3,
        opacity : 0,
        y: 200,
        ease : easeInOut
    }, 0.08);

    let x = 0;
    let y = 0;
    let mx = 0;
    let my = 0;
    let circleItem;

    window.onload = () => {
        circleItem = document.querySelector('.circleItem');

        window.addEventListener('mousemove', mouseMostion , false);

        function mouseMostion(e){
            x = e.clientX;
            y = e.clientY;
        }

        loop();
    }

    function loop(){
        mx += (x - mx) * 0.05;
        my += (y - my) * 0.05;

        circleItem.style.transform = `translate(${mx}px,${my}px)`;
        window.requestAnimationFrame(loop);
    }


