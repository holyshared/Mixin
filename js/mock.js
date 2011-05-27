(function(){

var AttachMock = this.AttachMock = new Class({

	Implements: [Attachment],

	attachEvent: 'click',
	attachHandler: function(event){
		event.preventDefault();
		alert('attached');
	}

});

}());
