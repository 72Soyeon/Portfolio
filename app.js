//page show animation
window.addEventListener("pageshow", function(){
    console.log("pageshow");

    var timeline_intro = gsap.timeline({
		delay: 0,
        paused:true
	});

	timeline_intro.to("html", 0.6, {
		autoAlpha: 1,
		ease: Power1.easeOut
	});

    timeline_intro.play();

	var timeline = gsap.timeline({
		delay: 0.8,
		paused: true
	});
	
    timeline.staggerFromTo(".stagger", 1.0, {
			y: '150%',
			skewY: 5,
			autoAlpha: 0
		}, {
			y: '0%',
			skewY: 0,
			autoAlpha: 1,
			ease: Circ.easeOut
		}, 0.3);

	timeline.play();

    
	var timeline_with = gsap.timeline({
		delay: 0.8,
		paused: true
	});

    timeline_with.staggerFromTo(".introTrans", 1.0,{
            autoAlpha:0
        },{
                autoAlpha:1
        }, 0.3);

    timeline_with.play();
        
});

//ordering+timlining
gsap.ticker.fps(50);

var timeline_transition01 = gsap.timeline({
        paused: true,
        overwrite: true
});


timeline_transition01
    .to("html", 0.5, {
            autoAlpha: 0,
            ease: Power2.easeInOut
    });
    
timeline_transition01.timeScale(0.5);



//'stagger body trigger' class animation
[...document.querySelectorAll('.stagger_body_trigger')].forEach(function(item) {
	var staggers = item.querySelectorAll('.stagger_body');
	var timeline02 = gsap.timeline({
		paused: true
	});
	timeline02.staggerFromTo(staggers, 1.5 	, {
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
		onEnter: () => timeline02.play()
	});
});


//'more section' title animation
[...document.querySelectorAll('.more_stagger_body_trigger')].forEach(function(item) {
	var staggers = item.querySelectorAll('.more_stagger_body');
	var timeline02 = gsap.timeline({
		paused: true
	});

	timeline02.staggerFromTo(staggers, 2, {
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
		onEnter: () => timeline02.play()
	});
});
