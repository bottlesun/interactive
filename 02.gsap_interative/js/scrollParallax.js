let parallax = gsap.timeline();

parallax
    .to('.bg', 2 ,{
        scale: 1,
        x: "-20vw"
    })
    .to('.plane' ,{
        x: "95vw",
        y: "-95vh",
        scale: 0.4,
    }, "<" )
    .to('.building',{
        scale:1,
        y:0
    }, "<")

ScrollTrigger.create({
    animation : parallax,
    trigger : '.parallax',
    start: 'top 0%',
    end : 'bottom 0%',
    scrub : 2,
    pin:true
})