window.addEventListener('scroll', function() {
	var element = document.getElementById("ani");
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	
    if(!(position.top >= 0 && position.bottom <= window.innerHeight)){

        element.classList.remove('animate__backInDown');
    }else{
        element.classList.add('animate__backInDown');
    }


});