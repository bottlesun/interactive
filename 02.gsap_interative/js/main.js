let text = document.querySelector('h2');
let char = text.querySelectorAll('span');

let tl = gsap.timeline(),
    ScrollAction = gsap.timeline() ,
    navAciton = gsap.timeline()

tl.set(char,{
    yPercent:-150
});

tl.set(text,{
    autoAlpha:1,
})
tl.to(char,{
    duration : 1,
    yPercent: -10,
    stagger : 0.05,
    ease : 'expo.inout',
})

navAciton.from('.navList ul li',{
    duration: 1,
    yPercent:-150,
    stagger: 0.05,
    ease: 'expo.inout'
})

ScrollAction.to('.main',1,{
    scale : 2,
    stagger:0.05,
    ease:'expo.inout'
})

ScrollTrigger.create({
    animation: ScrollAction,
    trigger : ".main",
    start: 'top 0%',
    end : 'bottom 60%',
    scrub : 2,
    pin:true
})
ScrollTrigger.create({
    animation : navAciton,
    trigger : '.navList',
    scrub : 2,
    pin:true
})

