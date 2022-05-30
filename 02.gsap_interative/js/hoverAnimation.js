let navLink = gsap.utils.toArray('.nav-link'),
    imgWrap = document.querySelector('.img-wrapper'),
    imgItem = document.querySelector('.img-placeholder img');

function moveImg(e) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    let tl = gsap.timeline();

    tl.to(imgWrap,{
        duration:1,
        x:mouseX,
        y:mouseY,
        ease : Expo.ease
    })
}

function linkHover(e) {
    if(e.type === 'mouseenter'){
        let imgSrc = e.target.dataset.src;
        let tl = gsap.timeline();

        tl.set(imgItem , {
            attr : {src : imgSrc}
        }).to(imgWrap,{
            autoAlpha : 1,
            scale : 1
        })
    } else if(e.type === 'mouseleave'){
        let tl = gsap.timeline();
        tl.to(imgWrap,{
            autoAlpha : 0,
            scale : 0.3
        })
    }
}

function  initAnimation() {
    navLink.forEach(link => {
        link.addEventListener('mouseenter', linkHover );
        link.addEventListener('mouseleave', linkHover );
        link.addEventListener('mousemove', moveImg );
    })
}

window.onload = () => {
    initAnimation()
}
