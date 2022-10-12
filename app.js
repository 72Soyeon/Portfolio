window.addEventListener("pageshow", function(){
    console.log("pageshow");

    var tl_intro = gsap.timeline({
		delay: 0,
        paused:true
	});

	tl_intro.to("html", 0.8, {
		autoAlpha: 1,
		ease: Power1.easeOut
	});

    tl_intro.play();

	var tl = gsap.timeline({
		delay: 0.8,
		paused: true
	});
	
    tl.staggerFromTo(".stagger", 1.0, {
			y: '150%',
			skewY: 5,
			autoAlpha: 0
		}, {
			y: '0%',
			skewY: 0,
			autoAlpha: 1,
			ease: Circ.easeOut
		}, 0.3);

	tl.play();

    
	var tl_with = gsap.timeline({
		delay: 0.8,
		paused: true
	});

    tl_with.staggerFromTo(".introTrans", 1.0,{
            autoAlpha:0
        },{
                autoAlpha:1
        }, 0.3);

    tl_with.play();
        
});

gsap.ticker.fps(50);

var tl_transition01 = gsap.timeline({
        paused: true,
        overwrite: true
});


tl_transition01
    .to("html", 0.5, {
            autoAlpha: 0,
            ease: Power2.easeInOut
    });
    
tl_transition01.timeScale(0.5);
