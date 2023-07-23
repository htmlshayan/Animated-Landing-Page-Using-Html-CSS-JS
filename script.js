var tl = gsap.timeline()

tl.from(".nav-bar h1, .nav-bar h3,.nav-bar button, .nav-bar i",{
    y:-100,
    duration:1,
    delay:0.3,
    stagger:0.5
})

tl.from(".content h3, .content h1, .content button",{
    y:100,
    duration:1,
    delay:0.3,
    opacity:0,
    stagger:0.5
})

tl.from(".content h5",{
    y:-50,
    duration:1,
    repeat:-1,
    opacity:0,
    yoyo:true
})

