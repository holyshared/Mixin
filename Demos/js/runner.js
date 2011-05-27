(function($){

	var mock = new AttachMock();

	window.addEvent('domready', function(){

		$('attach').addEvent('click', function(event){
			event.preventDefault();
			mock.attach('#attachEvents a');
		});

		$('dettach').addEvent('click', function(event){
			event.preventDefault();
			mock.dettach('#attachEvents a');
		});

	});

}(document.id));
