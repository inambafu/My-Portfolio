$(document).ready(function(){
	$(window).scroll(function(){
		//fixed sticky navbar on scroll

		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");	
		}else{
			$('.navbar').removeClass("sticky");
		}
	});
});
