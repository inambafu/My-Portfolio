$(document).ready(function(){
	$(window).scroll(function(){
		//fixed sticky navbar on scroll

		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");	
		}else{
			$('.navbar').removeClass("sticky");
		}
	});
	//typing effect
	var typed = new Typed(".typing", {
		strings: ["Web Designer", "Web Developer", "IT Freelancer", "IT Consultant"],
		typeSpeed: 100,
		backSpeed: 60,
		loop:true
	});
	
});








