window.addEventListener("pageshow", function(){
    console.log("pageshow");

    var tl_intro = gsap.timeline({
		delay: 0,
        paused:true
	});

	tl_intro.to("html", 0.6, {
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



[...document.querySelectorAll('.stagger_body_trigger')].forEach(function(item) {
	var staggers = item.querySelectorAll('.stagger_body');
	var tl02 = gsap.timeline({
		paused: true
	});
	tl02.staggerFromTo(staggers, 1.5 	, {
		y: '100%',
		skewY: 10,
		autoAlpha: 0
	}, {
		y: '0%',
		skewY: 0,
		autoAlpha: 1,
		ease: Power4.easeOut
	}, 0.3);
	ScrollTrigger.create({
		trigger: item,
		start: "center bottom",
		onEnter: () => tl02.play()
	});
});


[...document.querySelectorAll('.more_stagger_body_trigger')].forEach(function(item) {
	var staggers = item.querySelectorAll('.more_stagger_body');
	var tl02 = gsap.timeline({
		paused: true
	});

	tl02.staggerFromTo(staggers, 2, {
		y: '50%',
		skewY: 2,
		autoAlpha: 0
	}, {
		y: '0%',
		skewY: 0,
		autoAlpha: 1,
		ease: Power4.easeOut
	}, 0.3);

	ScrollTrigger.create({
		trigger: item,
		start: "left bottom",
		onEnter: () => tl02.play()
	});
});
