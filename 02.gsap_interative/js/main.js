let text = document.querySelector('h2');
let char = text.querySelectorAll('span');

let tl = gsap.timeline();

tl.set(char,{
    yPercent:-110
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
