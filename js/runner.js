(function($){

	var mock = new AttachMock();

	window.addEvent('domready', function(){

		var selecter = '#attachEvents a';

		var attach = $('attach');
		var dettach = $('dettach');
		var elements = $$(selecter);

		var dettachHandler = function(event){
			event.preventDefault();
		};

		mock.attach(selecter);
		attach.addClass('disable');

		attach.addEvent('click', function(event){
			event.preventDefault();
			if (mock.isAttached(selecter)) return;
			mock.attach(selecter);

			this.addClass('disable');
			dettach.removeClass('disable')
				.addClass('enable');

			elements.removeEvent('click', dettachHandler);
		});

		dettach.addEvent('click', function(event){
			event.preventDefault();
			if (!mock.isAttached(selecter)) return;
			mock.dettach(selecter);

			this.addClass('disable');
			attach.removeClass('disable')
				.addClass('enable');

			elements.addEvent('click', dettachHandler);
		});

	});

}(document.id));
