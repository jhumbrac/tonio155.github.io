function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName;
	$('h2').text('Hello ' + fullName);

	var  userAge = prompt('How old are you?');
	userAge = parseInt(userAge);

		if (isNaN(userAge)) {
		alert('Try Again');
	}

	if (userAge >= 18) {
		console.log('Come on in');
	} else if (userAge >= 13) {
		console.log('Come back in a few year');
	} else {
		console.log('Go away Child!');
	}

	if (firstName === 'General' && lastName !== 'Assembly'); {
		console.log('Welcome!!!')
	}

	/*if (firstName === 'General')
		if (lastName !== 'Assembly') {
			console.log('Welcome!!!');
	}*/
}


// When the page loads (wait until the page is ready)
$(document).on('ready', function() {

	$('img').on('click', askQuestions);

	// Hide all the sections
	$('h3').next().hide();

	// When the user clicks an h3 (JQUERY, finds the h3 on the page, and when used click)
	$('h3').on('mouseover', function(){

		// Find the next element and toggle it
		$(this).next().slideDown();


	})
	$('h3').on('click', function(){ // coould be also mouseout
		$(this).next().slideUp();
	});


});

// single line comment

/*Block Comment
	Several Lines
		Whooow!!!*/

