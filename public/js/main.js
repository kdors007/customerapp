$(document).ready(function(){
	$('.deleteUser').on('click', deleteUser)
});

function deleteUser(){
	var confirmation = confirm('Are You Sure?');

	var deleteit = $(this).data('id')

	if(confirmation){
	// 	$.ajax({
	// 		type: 'DELETE',
	// 		url: '/users/delete/';
	// 	}).done(function(response){
	// 		window.location.replace('/');
	// 	});
	// } else {
	// 	return false;
	
		$.ajax({
			type: 'DELETE',
			url: '/users/delete/'+deleteit

		}).done(function(response){
			window.location.replace('/');
		});
		window.location.replace('/');
	} else {
		return false;
	}
}